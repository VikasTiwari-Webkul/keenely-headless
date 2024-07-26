// NOTE: https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate
export const UPDATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $addressId: ID!,
    $customerAccessToken: String!
 ) {
    customerAddressUpdate(
      address: $address
      id: $addressId,
      customerAccessToken:$customerAccessToken
    ) {
      customerAddress {
        id
      }
      customerUserErrors [CustomerUserError]
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete
export const DELETE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressDelete(
    $addressId: ID!,
    $customerAccessToken: String!
  ) {
    customerAddressDelete(addressId: $addressId,customerAccessToken:$customerAccessToken) {
      deletedAddressId
      customerUserErrors [CustomerUserError]
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate
export const CREATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $defaultAddress: Boolean
  ) {
    customerAddressCreate(
      address: $address
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
` as const;
