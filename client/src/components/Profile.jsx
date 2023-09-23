import { useState, useEffect } from 'react';
import Container from './reuseable/Container';
import Header from './Header';
import apiService from '../apiService';
import axios from 'axios';

const Profile = ({ onClick, picture, name, email,bio ,password}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:9000/googleusers/email/${email}`)
      .then((response) => response.data)
      .then((res) => setUser(res))
      .catch((err) => console.error(err));
  }, [email]);

  console.log(user);
  return (
    <section className='profile'>
      <Header onClick={onClick} photo={user.user?.photo} />
      <table>
        <tbody>
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
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <button>Edit</button>
            </td>
          </tr>

          <tr>
            <td className='font-lightgrey'>PHOTO</td>
            <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img
                className='img-style'
                // src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
                src={user.user?.photo}
              />
            </td>
          </tr>
          <tr>
            <td className='font-lightgrey'>NAME</td>
            <td>{name || user.user?.name}</td>
          </tr>
          <tr>
            <td className='font-lightgrey'>BIO</td>
            <td>{bio||user?.user?.bio}</td>
          </tr>

          <tr>
            <td className='font-lightgrey'>EMAIL</td>
            <td>{email || user.user?.email}</td>
          </tr>

          <tr>
            <td className='font-lightgrey'>PASSWORD</td>
            <td>{password || user?.user?.password}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
