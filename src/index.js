import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { userReducer } from './store/reducers/user';
import { postReducer } from './store/reducers/post';
import { reportReducer } from './store/reducers/report';


const rootReducer = combineReducers({
  usr: userReducer,
  pst: postReducer,
  rpt: reportReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(Thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
