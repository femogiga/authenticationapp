import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from './reuseable/InputComponent';
import TextAreaComponent from './reuseable/TextAreaComponent';

const EditPage = () => {
  return (
    <div className='editpage'>
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
              <span className='material-symbols-outlined abs' style={{left:'11%'}}>photo_camera</span>
            </div>
          </div>
        </article>
        <InputComponent labelText={'Name'} placeholder={'Enter your name..'} />
        <TextAreaComponent
          textAreaText={'Bio'}
          placeholder={'Enter your bio...'}
        />
        <InputComponent
          labelText={'Phone'}
          placeholder={'Enter your phone...'}
        />
        <InputComponent
          labelText={'Email'}
          placeholder={'Enter your email...'}
        />
        <InputComponent
          labelText={'Password'}
          placeholder={'Enter your password'}
        />
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
