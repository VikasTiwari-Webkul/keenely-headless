import {ActionFunctionArgs, redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {FEATURED_COLLECTION_QUERY} from './_index';

/**
 * It used for getting the  collection list at the account page section
 * @param param
 * @returns collection list required at the account page
 */

export async function loader({request, context, params}: LoaderFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);
  
  return {
    collectionList: collections.nodes,
  };
}


export async function action({request, context, params}: ActionFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);
  return {
    featuredCollection: collections.nodes,
  };
}

export default function Component() {
  return null;
}
