import React from 'react';
import {GET_QUESTIONS_DETAIL} from './queries';
import {useQuery} from '@apollo/client';
import Loading from '../../components/Loading';
import {Box, Heading} from 'native-base';
import Form from './Form';
import Results from './Results';
const Detail = ({route}) => {
  const {id} = route.params;
  const [isVoted, setIsVoted] = useState(false);
  const {loading, data} = useQuery(GET_QUESTIONS_DETAIL, {
    variables: {
      id,
    },
  });
  if (loading) {
    return <Loading />;
  }
  const {text, options} = data.questions_by_pk;
  return (
    <Box p="3">
      <Heading>{text}</Heading>
      {!isVoted ? <Form options={options} setIsVoted={setIsVoted}/> : <Results  /> }
      
    </Box>
  );
};

export default Detail;
