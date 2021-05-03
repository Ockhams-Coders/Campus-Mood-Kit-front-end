/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClinic = /* GraphQL */ `
  query GetClinic($id: ID!) {
    getClinic(id: $id) {
      id
      name
      reviews {
        items {
          id
          rating
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      likes
      rating
      description
      createdAt
      updatedAt
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
        reviews {
          nextToken
        }
        likes
        rating
        description
        createdAt
        updatedAt
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
        reviews {
          nextToken
        }
        likes
        rating
        description
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
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
          likes
          rating
          description
          createdAt
          updatedAt
        }
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResults = /* GraphQL */ `
  query GetResults($id: ID!) {
    getResults(id: $id) {
      id
      insurance
      q0
      q1
      q2
      q3
      q4
      q5
      q6
      q7
      q8
      q9
      q10
      createdAt
      updatedAt
    }
  }
`;
export const listResultss = /* GraphQL */ `
  query ListResultss(
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResultss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        insurance
        q0
        q1
        q2
        q3
        q4
        q5
        q6
        q7
        q8
        q9
        q10
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
