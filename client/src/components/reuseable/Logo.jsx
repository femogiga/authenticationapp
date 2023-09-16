import React from 'react';
import logo from '../../assets/images/devchallenges.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='flow-1'>
      <Link to='/profile'>
        <img src={logo} alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
