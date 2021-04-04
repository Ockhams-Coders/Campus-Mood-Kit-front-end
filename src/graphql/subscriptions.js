/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClinic = /* GraphQL */ `
  subscription OnCreateClinic {
    onCreateClinic {
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
export const onUpdateClinic = /* GraphQL */ `
  subscription OnUpdateClinic {
    onUpdateClinic {
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
export const onDeleteClinic = /* GraphQL */ `
  subscription OnDeleteClinic {
    onDeleteClinic {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
