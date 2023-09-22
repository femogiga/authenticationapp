import React from 'react';
import { Link } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const ThumbCard = ({ onClick }) => {
  return (
    <article className='thumbcard'>
      <ul className='list flex flex-column gap-05'>
        <li>
          <Link className='flex align-center gap-05'>
            <span className='material-symbols-outlined'>account_circle</span>My
            Profile
          </Link>
        </li>
        <li>
          <Link className='flex align-center gap-05'>
            <span className='material-symbols-outlined'>group</span>Group Chat
          </Link>
        </li>
        <hr />
        <li className='font-red'>
          <Link
            to=''
            onClick={onClick}
            className='flex align-center gap-05 logout'>
            <span className='material-symbols-outlined font-red'>logout</span>
            <span className='font-red'> Logout</span>
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default ThumbCard;
