import Logo from './reuseable/Logo';
import twitter from '../assets/images/Twitter.svg';
import github from '../assets/images/Gihub.svg';
import google from '../assets/images/Google.svg';
import facebook from '../assets/images/Facebook.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, clear, loginAsync } from '../features/loginSlice';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiService from '../apiService';
import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

const Loginpage = ({onClick,onSuccess}) => {
  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { emailInput, passwordInput, data, loading, error } = useSelector(
    (state) => state.login
  );



  const handleInputChange = (field, value) => {
    dispatch(setInputValue({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue({ field: 'error', value: null }));

    dispatch(loginAsync({ email: emailInput, password: passwordInput })).then(
      (resultAction) => {
        if (loginAsync.fulfilled.match(resultAction)) {
          navigate('/profile');
        } else if (loginAsync.rejected.match(resultAction)) {
          dispatch(
            setInputValue({ field: 'error', value: resultAction.error.message })
          );
        }
      }
    );
  };
  return (
    <div className='loginpage'>
      <Logo />

      <p className='flow-1 bold'>
        Join thousands of learners from around the world
      </p>
      <p className='flow-2'>
        Master web development by making real-life projects. There multiple
        paths for you to choose.
      </p>
      <form>
        <div className='flow-p5 rel font-grey'>
          <input
            type='email'
            placeholder='Email'
            className='radius-8'
            name='emailInput'
            id='emailInput'
            value={emailInput}
            onChange={(e) => handleInputChange('emailInput', e.target.value)}
          />
          <span className='material-symbols-outlined abs xyoffset'>mail</span>
        </div>
        <div className='flow-1 rel font-grey '>
          <span className='material-symbols-outlined abs xyoffset'>lock</span>
          <input
            type='password'
            placeholder='Password'
            className='radius-8'
            name='passwordInput'
            id='passwordInput'
            value={passwordInput}
            onChange={(e) => handleInputChange('passwordInput', e.target.value)}
          />
        </div>
        <div className='flow-1'>
          <button
            onClick={(e) => handleSubmit(e)}
            className='submit radius-8'
            type='submit'>
            Start coding now
          </button>
        </div>
      </form>
      <p className='flow-1 font-grey center'>
        or continue with these social profile
      </p>
      <article className='flow-1 flex flex-center'>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
        /> */}
        <Link onClick= {onClick}>
          <img src={google} />
        </Link>
        <img src={facebook} />
        <img src={twitter} />
        <img src={github} />
      </article>
      <p className='font-grey center'>
        Not registered? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Loginpage;
