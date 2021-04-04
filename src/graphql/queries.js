/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClinic = /* GraphQL */ `
  query GetClinic($id: ID!) {
    getClinic(id: $id) {
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
export const listClinics = /* GraphQL */ `
  query ListClinics(
    $filter: ModelClinicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        clinic {
          id
          name
          createdAt
          updatedAt
          owner
        }
        comment
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
