import React from 'react';
import Container from './reuseable/Container';
import Header from './Header';

const Profile = () => {
  return (
    <section>
      <table>
        {/* <tr>
          <th colSpan='2' className='remove-underline'>
            <td className='remove-underline' style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem' }}>Personal info </span>
              <br />
              Basic info , like your name and photo
            </td>
          </th>
        </tr> */}
        <tr>
          <th colSpan='2' className='remove-underline'>

              <span style={{ fontSize: '2rem' }}>Personal info </span>
              <br />
              Basic info , like your name and photo
          </th>
        </tr>

        <tr>
          <th className='remove-underline' style={{ textAlign: 'start' }}>
            <span style={{ fontSize: '1.4rem' }}>Profile</span>
            <br />
            <span className='font-grey'>
              some info may be visible to other people
            </span>
          </th>
          <td
            className='remove-underline'
            style={{ display: 'flex', justifyContent: 'flex-end' ,alignItems:'center'}}>
            <button>Edit</button>
          </td>
        </tr>

        {/* <tr className=''>
          <tr className='flex space-btw align-center'>
            <td className='fifty-percent'>
              <tr>
                <td>Profile</td>
              </tr>
              <tr>
                <td className='fs-small'>
                  some info may be visible to other people
                </td>
              </tr>
            </td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
        </tr> */}

        <tr>
          <td className='font-lightgrey'>PHOTO</td>
          <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img className='img-style' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
          </td>
        </tr>
        <tr>
          <td className='font-lightgrey'>NAME</td>
          <td>Xanthe Neal</td>
        </tr>
        <tr>
          <td className='font-lightgrey'>BIO</td>
          <td>I am a software developer....</td>
        </tr>

        <tr>
          <td className='font-lightgrey'>EMAIL</td>
          <td>xanthe.neal@gmail.com</td>
        </tr>

        <tr>
          <td className='font-lightgrey'>PASSWORD</td>
          <td>***********</td>
        </tr>
      </table>
    </section>
  );
};

export default Profile;
