import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from './reuseable/InputComponent';
import TextAreaComponent from './reuseable/TextAreaComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, clear, submit } from '../features/inputSlice';
import Header from './Header';

const EditPage = () => {
  const nameInput = useSelector((state) => state.edit.nameInput);
  const bioInput = useSelector((state) => state.edit.bioInput);
  const emailInput = useSelector((state) => state.edit.emailInput);
  const phoneInput = useSelector((state) => state.edit.phoneInput);
  const passwordInput = useSelector((state) => state.edit.passwordInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit());
    dispatch(clear());
  };

  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(setInputValue({ field, value }));
  };

  return (
    <div className='editpage'>
      <Header/>
      <div className='flow-3'>
        <Link className='flex align-center gap-05'>
          <span className='material-symbols-outlined'>arrow_back_ios_new</span>
          Back
        </Link>
      </div>
      <form>
        <article className='flow-2'>
          <h3>Change Info</h3>
          <p className='flow-2 font-grey'>
            Changes will be reflected to every services
          </p>
          <div className='rel flow-3'>
            <input
              type='file'
              name='photo'
              className='fileinput'
              style={{ opacity: 0, zIndex: '3' }}
            />
            <div
              className='flex align-center gap-1 abs'
              style={{ top: '0', zIndex: '-4' }}>
              <img
                style={{ zIndex: '-4' }}
                className='img-style'
                src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
              />
              <p className='font-grey'>CHANGE PHOTO</p>
              <span
                className='material-symbols-outlined abs'
                style={{ left: '11%' }}>
                photo_camera
              </span>
            </div>
          </div>
        </article>
        <InputComponent
          labelText={'Name'}
          placeholder={'Enter your name..'}
          name={'nameInput'}
          id={'nameInput'}
          value={nameInput}
          onChange={(e) => handleInputChange('nameInput', e.target.value)}
        />
        <TextAreaComponent
          textAreaText={'Bio'}
          placeholder={'Enter your bio...'}
          name={'bioInput'}
          id={'bioInput'}
          value={bioInput}
          onChange={(e) => handleInputChange('bioInput', e.target.value)}
        />
        <InputComponent
          labelText={'Phone'}
          placeholder={'Enter your phone...'}
          name={'phoneInput'}
          id={'phone'}
          value={phoneInput}
          onChange={(e) => handleInputChange('phoneInput', e.target.value)}
        />
        <InputComponent
          labelText={'Email'}
          placeholder={'Enter your email...'}
          name={'emailInput'}
          id={'email'}
          value={emailInput}
          onChange={(e) => handleInputChange('emailInput', e.target.value)}
        />
        <InputComponent
          labelText={'Password'}
          placeholder={'Enter your password'}
          name={'passwordInput'}
          id={passwordInput}
          value={passwordInput}
          onChange={(e) => handleInputChange('passwordInput', e.target.value)}
        />
        <div>
          <button className='submitbutton' onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
