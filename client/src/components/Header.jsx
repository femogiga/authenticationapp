import { useState } from 'react';
import Logo from './reuseable/Logo';
import ThumbCard from './reuseable/ThumbCard';
import { Link } from 'react-router-dom';
import { setVisible } from '../features/thumbSlice';
import { useSelector, useDispatch } from 'react-redux';
const Header = ({ onClick, photo }) => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.thumb.visible);
  const handleThumbVisible = (e) => {
    e.preventDefault();
    dispatch(setVisible());
  };
  return (
    <header className='header flex space-btw gap-1'>
      <Logo />
      <div>
        <div className='picturecont flex  align-center gap-05'>
          <Link onClick={(e) => handleThumbVisible(e)}>
            <div className='img-cont'>
              <img
                className='avatar'
                // src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
                 src={photo || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'}
              />
            </div>
          </Link>
          <p className='nametag'>Xanthe Neal</p>
          <button className='updownbutton'>
            {visible ? (
              <span className='material-symbols-outlined'>arrow_drop_down</span>
            ) : (
              <span className='material-symbols-outlined'>arrow_drop_up</span>
            )}
          </button>
        </div>
        {visible && <ThumbCard onClick={onClick} photo={photo} />}
      </div>
    </header>
  );
};

export default Header;
