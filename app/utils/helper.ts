import { variantsMapping } from "~/components/elements/Typography";

/**
 * Check array is valid or not
 *
 * @param {Array} arr
 * @returns boolean
 */
export const isValidArray = (arr: any) => {
  return arr && Array.isArray(arr) && arr.length > 0;
};
/**
 * Check array is valid or not
 *
 * @param {String} str
 * @returns boolean
 */
export const isValidString = (str: string) => {
  return str && typeof str === 'string' && str.length > 0;
};

/**
 *
 * @param {Object} obj
 * @returns boolean
 */
export function isValidObject(obj: any) {
  return obj && Object.keys(obj).length > 0 && obj.constructor === Object;
}

/**
 * Return the formatted Currency as per the currency code
 * @param price 
 * @param currency 
 * @param isNegative 
 * @returns 
 */

export const getFormattedPrice = (
  price: number,
  currency: string,
  isNegative = false
) => {
  return price?.toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
};