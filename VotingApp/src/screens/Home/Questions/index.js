import {View, Text} from 'react-native';
import React from 'react';
import { useSubscription} from '@apollo/client';
import { GET_QUESTIONS_SUBSCRIPTION } from './queries';
import List from './List';
import Loading from "../../../components/Loading"
const Questions = () => {
  const { loading, error, data } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);
    if (loading) {
      return <Loading />
    }
    if (error) {
      return <Text>{JSON.stringify(error)}</Text>
    }
  return (
    <View>
        <List data={data} />
    </View>
  );
};

export default Questions;
