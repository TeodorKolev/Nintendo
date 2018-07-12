import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {appReducer} from "./AppReducer";
import {Provider} from "react-redux";
import * as ReactDOM from "react-dom";

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
