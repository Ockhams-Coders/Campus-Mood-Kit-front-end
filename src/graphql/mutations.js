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
      likes
      rating
      description
      createdAt
      updatedAt
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
      likes
      rating
      description
      createdAt
      updatedAt
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
      likes
      rating
      description
      createdAt
      updatedAt
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
      clinic
      comment
      createdAt
      updatedAt
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
      clinic
      comment
      createdAt
      updatedAt
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
      clinic
      comment
      createdAt
      updatedAt
    }
  }
`;
export const createResults = /* GraphQL */ `
  mutation CreateResults(
    $input: CreateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    createResults(input: $input, condition: $condition) {
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
      q11
      q12
      q13
      q14
      q15
      q16
      q17
      createdAt
      updatedAt
    }
  }
`;
export const updateResults = /* GraphQL */ `
  mutation UpdateResults(
    $input: UpdateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    updateResults(input: $input, condition: $condition) {
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
      q11
      q12
      q13
      q14
      q15
      q16
      q17
      createdAt
      updatedAt
    }
  }
`;
export const deleteResults = /* GraphQL */ `
  mutation DeleteResults(
    $input: DeleteResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    deleteResults(input: $input, condition: $condition) {
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
      q11
      q12
      q13
      q14
      q15
      q16
      q17
      createdAt
      updatedAt
    }
  }
`;
export const createDiagnosis = /* GraphQL */ `
  mutation CreateDiagnosis(
    $input: CreateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    createDiagnosis(input: $input, condition: $condition) {
      id
      depression
      suicidal
      anxiety
      OCD
      eating
      ADHD
      createdAt
      updatedAt
    }
  }
`;
export const updateDiagnosis = /* GraphQL */ `
  mutation UpdateDiagnosis(
    $input: UpdateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    updateDiagnosis(input: $input, condition: $condition) {
      id
      depression
      suicidal
      anxiety
      OCD
      eating
      ADHD
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiagnosis = /* GraphQL */ `
  mutation DeleteDiagnosis(
    $input: DeleteDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    deleteDiagnosis(input: $input, condition: $condition) {
      id
      depression
      suicidal
      anxiety
      OCD
      eating
      ADHD
      createdAt
      updatedAt
    }
  }
`;
