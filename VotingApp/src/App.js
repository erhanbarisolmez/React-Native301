import Router from './Router';
import {NativeBaseProvider} from 'native-base';
import { ApolloProvider } from '@apollo/client';
import client from './Apollo';

export default function App() {
  return (
   
    <NativeBaseProvider>
      <ApolloProvider client={client}>
      <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  );
}
