import Logo from './reuseable/Logo';
import twitter from '../assets/images/Twitter.svg';
import github from '../assets/images/Gihub.svg';
import google from '../assets/images/Google.svg';
import facebook from '../assets/images/Facebook.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, clear, submit } from '../features/loginSlice';

const Loginpage = () => {
  const dispatch = useDispatch();
  const emailInput = useSelector((state) => state.login.emailInput);
  const passwordInput = useSelector((state) => state.login.passwordInput);

  const handleInputChange = (field, value) => {
    dispatch(setInputValue({ field, value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit());
     dispatch(clear());
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
            className='submit radius-8'
            type='submit'
            onClick={handleSubmit}>
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
