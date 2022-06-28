import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';


import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact element={<Welcome/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/feature" element={<Feature/>} />
        <Route path="/signout" element={<Signout/>} />
        <Route path="/signin" element={<Signin/>} />
      </App>
    </BrowserRouter>
  </Provider>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

