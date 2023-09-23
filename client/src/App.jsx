import { useState, useEffect } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';

import ThumbCard from './components/reuseable/ThumbCard';
import Header from './components/Header';
import Profile from './components/Profile';
import EditPage from './components/EditPage';
import apiService from './apiService';

import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? localStorage.getItem('loginData') : null
  );
  //  const navigate = useNavigate();

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log('googleData===>', googleData);
    console.log('loginData===>', loginData);
    const res = axios
      .post(`http://localhost:9000/api/google-login`, googleData)
      .then((response) => response.data.user)
      .then((response) => {
        setLoginData(response);
        localStorage.setItem('loginData', JSON.stringify(response));
      });

    // const data = await res.data;
    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };

  useEffect(() => {}, [loginData]);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
    googleLogout();
    console.log(loginData);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLogin}
        onFailure={handleFailure}
        buttonText={'login'}></GoogleLogin>

      {loginData ? (
        <Profile onClick={handleLogout} {...loginData} />
      ) : (
        <Loginpage onClick={''} />
      )}


    </div>
  );
}

export default App;
