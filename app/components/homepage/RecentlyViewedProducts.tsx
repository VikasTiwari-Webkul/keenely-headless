import ProductSlider from '@keenly/components/elements/ProductSlider';
import Typography from '@keenly/components/elements/Typography';
import { RightArrowIcon } from '@keenly/components/elements/Icons';
import type { RecommendedProductsQuery } from 'storefrontapi.generated';
import SectionHeader from '@keenly/components/elements/SectionHeader';


export const RecentlyViewedProducts = ({ products }: {products: RecommendedProductsQuery['products']}) => {
  return (
    <div className="bg-gray-50 w-full pt-4 pb-8 px-2 flex flex-col justify-center gap-y-2 tablet:pt-2 tablet:px-4 tablet:pb-4
       desk-pri:py-10 desk-pri:px-20 desk-sec:py-10 desk-sec:px-40
      ">
       {/* Heading Section */}   
       <SectionHeader title='Recently Viewed Product' />
        {/* Product Slider Section */}
      <ProductSlider products={products} />
    </div>
  );
};

export default RecentlyViewedProducts;
