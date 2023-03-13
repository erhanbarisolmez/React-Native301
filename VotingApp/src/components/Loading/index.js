import React from 'react';
import Lottie from 'lottie-react-native';
import {Box, Text} from 'native-base';
const Loading = () => {
  return (
    <Box
    backgroundColor="blue"
     height="100%"
     justifyContent="center"
     alignItems="center"
    >
      <Lottie
        autoPlay
        source={require('./animations/loading.json')}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </Box>
  );
};

export default Loading;
