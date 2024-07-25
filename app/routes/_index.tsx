import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {lazy, Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import CollectionList from '@keenly/components/homepage/CollectionList';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import {FeaturedCollection} from '@keenly/components/homepage/FeaturedCollection';
import {TrustBanner} from '@keenly/components/homepage/TrustBanner';
import {PRODUCT_VARIANT_FRAGMENT} from './products.$handle';
import PopularCategories from '@keenly/components/homepage/PopularCategories';
import DiscoverStyleSlider from '@keenly/components/homepage/DiscoverStyleSlider';
import PopularProduct from '@keenly/components/homepage/PopularProduct';
import DiscoverStyleBanner from '@keenly/components/homepage/DiscoverStyleBanner';
import TodayDeals from '~/components/homepage/TodayDeals';

const RecentlyViewProductSection = lazy(
  () => import('../components/homepage/RecentlyViewedProducts'),
);

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();  
  
  return (
    <div className="home flex flex-col tablet:gap-y-6 desk-sec:gap-y-6">
      <div>
      <CollectionList collectionList={data.featuredCollection} />
      <FeaturedCollection data={data.featuredCollection} />
      </div>
      <div className="flex flex-col mobile:flex-col-reverse tablet:gap-y-6">
        <DiscoverStyleBanner />
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={data.recommendedProducts}>
            {(response: any) => <TodayDeals product={response.products} />}
          </Await>
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data.recommendedProducts}>
          {(response: any) => <PopularProduct product={response.products} />}
        </Await>
      </Suspense>
      <DiscoverStyleSlider />
      <PopularCategories />
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data.recommendedProducts}>
          {(response: any) => (
            <RecentlyViewProductSection products={response.products} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}


function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      className="recommended-product"
                      to={`/products/${product.handle}`}
                    >
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                      />
                      <h4>{product.title}</h4>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </Link>
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

export const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 10) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    variants(first: 3) {
      nodes {
        ...ProductVariant
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }

  ${PRODUCT_VARIANT_FRAGMENT}
` as const;
