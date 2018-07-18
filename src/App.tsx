import * as React from 'react';
import { Provider } from 'react-redux';
import { Action, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

import Clock from './components/Clock';
import Hello from './containers/Hello';

import './App.css';
import logo from './logo.svg';


const store = createStore<IStoreState, Action, {}, {}>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  devToolsEnhancer({})
);


const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Clock />
      <div className="App-intro">
        <Hello />
      </div>
    </div>
  </Provider>
);

export default App;
