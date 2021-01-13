import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
//     cache: new InMemoryCache()
//   });
  
ReactDOM.render(
  <React.StrictMode>
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

