//import externaly
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import locally
import App from './components/App';
import AppReducer from './reducers';

// Redux store
const store = createStore(AppReducer);
console.log(store);
store.subscribe(() => {
  console.log('--User_Activity_Logs-->', store.getState());
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
