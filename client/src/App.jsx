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
  //  const navigate = useNavigate();
  const handleLogout = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };
  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response);
      localStorage.setItem('user', user);
      // navigate('/profile' ,user)
    },
    onError: (error) => console.error('Login Failed ', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.acces_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((response) => setProfile(response.data))

        .catch((error) => console.error(error));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.acces_token}`,
              Accept: 'application/json',
            },
          }
        );
        const response = await response.json();
        setProfile(response.data);
      };
      fetchProfile();
    }
  }, [user]);
  console.log(user);
  console.log('profile====>', profile);
  return (
    <div>
      {profile ? (
        <Profile onClick={handleLogout} {...profile} />
      ) : (
        <Loginpage onClick={login} />
      )}
    </div>
  );
}

export default App;
