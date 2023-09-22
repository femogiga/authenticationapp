import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './components/Loginpage.jsx';
import EditPage from './components/EditPage.jsx';
import Profile from './components/Profile.jsx';
import { Provider } from 'react-redux';
import store from './features/store.js';
import Register from './components/Register.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={
        '1047862815779-2pu4r9eejuttfr3uksrp0si4703l8iri.apps.googleusercontent.com'
      }>
      <Provider store={store}>
        <Root />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
