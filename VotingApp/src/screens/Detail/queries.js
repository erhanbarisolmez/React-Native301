import {gql} from '@apollo/client';

export const GET_QUESTIONS_DETAIL = gql`
  query DetailQuery($id: Int!) {
    questions_by_pk(id: $id) {
      id
      text
      options {
        id
        text
      }
    }
  }
`;

export const NEW_ANSWER_MUTATION = gql`
  mutation NewAnswer($option_id: Int!) {
    insert_answers_one(object: {option_id: $option_id}) {
      id
    }
  }
`;
