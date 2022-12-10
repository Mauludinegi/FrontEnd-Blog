import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../config';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesInit from '../config/Routes';
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <RoutesInit/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
