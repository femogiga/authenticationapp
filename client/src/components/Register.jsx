import Logo from './reuseable/Logo';
import twitter from '../assets/images/Twitter.svg';
import github from '../assets/images/Gihub.svg';
import google from '../assets/images/Google.svg';
import facebook from '../assets/images/Facebook.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setRegisterInputs,
  setMesssage,
  setError,
} from '../features/registerSlice';
import apiService from '../apiService';
import { useState } from 'react';
import { useEffect } from 'react';
const Register = () => {
  const dispatch = useDispatch();
  const { emailInput, passwordInput, response, error } = useSelector(
    (state) => state.register
  );

  // console.log(response);

  const handleInputChange = (field, value) => {
    dispatch(setRegisterInputs({ field, value }));
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    const data = { email: emailInput, password: passwordInput };
    e.preventDefault();
    apiService
      .create('/register', data)
      .then((res) => {
        console.log(res.data.error);
        dispatch(setMesssage({ response: res.data }));

      })
      .then(res=> navigate('/login'))
      // .catch((err) => console.error(err));
      .catch((err) => {
        console.log(err.response.data.error);
        if (err.response && err.response.data) {
          dispatch(setError({ error: err.response.data.error }));
          console.log(err.response.data.error);
        }
      });
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
          <p>{response.message}</p>
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
            onClick={(e) => handleRegister(e)}
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
        <img src={google} />
        <img src={facebook} />
        <img src={twitter} />
        <img src={github} />
      </article>
      <p className='font-grey center'>
        Already a member? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Register;
