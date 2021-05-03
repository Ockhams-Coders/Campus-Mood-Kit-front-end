/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClinic = /* GraphQL */ `
  subscription OnCreateClinic {
    onCreateClinic {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClinic = /* GraphQL */ `
  subscription OnUpdateClinic {
    onUpdateClinic {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClinic = /* GraphQL */ `
  subscription OnDeleteClinic {
    onDeleteClinic {
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
      createdAt
      updatedAt
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
        reviews {
          nextToken
        }
        likes
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
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
        reviews {
          nextToken
        }
        likes
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
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
        reviews {
          nextToken
        }
        likes
        createdAt
        updatedAt
      }
      comment
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResults = /* GraphQL */ `
  subscription OnCreateResults {
    onCreateResults {
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
export const onUpdateResults = /* GraphQL */ `
  subscription OnUpdateResults {
    onUpdateResults {
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
export const onDeleteResults = /* GraphQL */ `
  subscription OnDeleteResults {
    onDeleteResults {
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
