import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Box, Text } from 'native-base';
import { QUESTIONS_QUERY } from './queries';
import { useQuery } from '@apollo/client';
const List = ({data}) => {
  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      borderBottomWidth={1}
      borderColor="#f1f1f1"
    >
      <Text>{JSON.stringify(data, null, 4)}</Text>
    
    </Box>
  );
};

export default List;
