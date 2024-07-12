import React from 'react';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import AppRouter from '@router/appRouter';
import {apiSlice} from '@api/index';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <ApiProvider api={apiSlice}>
        <AppRouter />
      </ApiProvider>
    </PaperProvider>
  );
};

export default App;
