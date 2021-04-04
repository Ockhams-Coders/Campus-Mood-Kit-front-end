/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClinic = /* GraphQL */ `
  mutation CreateClinic(
    $input: CreateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    createClinic(input: $input, condition: $condition) {
      id
      name
      address {
        street
        zip
        city
      }
      reviews {
        items {
          id
          rating
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClinic = /* GraphQL */ `
  mutation UpdateClinic(
    $input: UpdateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    updateClinic(input: $input, condition: $condition) {
      id
      name
      address {
        street
        zip
        city
      }
      reviews {
        items {
          id
          rating
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClinic = /* GraphQL */ `
  mutation DeleteClinic(
    $input: DeleteClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    deleteClinic(input: $input, condition: $condition) {
      id
      name
      address {
        street
        zip
        city
      }
      reviews {
        items {
          id
          rating
          comment
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      rating
      clinic {
        id
        name
        address {
          street
          zip
          city
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      rating
      clinic {
        id
        name
        address {
          street
          zip
          city
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      rating
      clinic {
        id
        name
        address {
          street
          zip
          city
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
