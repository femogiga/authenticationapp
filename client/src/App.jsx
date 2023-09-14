import { useState } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';
import ProfilePage from './components/Header';
import ThumbCard from './components/reuseable/ThumbCard';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Container>
        <Loginpage />
      </Container> */}
      <Container>
        <Header/>
        {/* <ProfilePage/> */}
      </Container>

    </div>
  );
}

export default App;
