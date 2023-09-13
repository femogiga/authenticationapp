import React from 'react';
import Logo from './reuseable/Logo';
import twitter from '../assets/images/Twitter.svg';
import github from '../assets/images/Gihub.svg';
import google from '../assets/images/Google.svg';
import facebook from '../assets/images/Facebook.svg';
import { Link } from 'react-router-dom';

const Loginpage = () => {
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
          <span className='material-symbols-outlined abs xyoffset'>mail</span>
          <input type='email' placeholder='Email' className='radius-8' />
        </div>
        <div className='flow-1 rel font-grey '>
          <span className='material-symbols-outlined abs xyoffset'>lock</span>
          <input type='password' placeholder='Password' className='radius-8' />
        </div>
        <div className='flow-1'>
          <button className='submit radius-8' type='submit'>
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
        Already a member? <Link to='/'>Login</Link>
      </p>
    </div>
  );
};

export default Loginpage;
