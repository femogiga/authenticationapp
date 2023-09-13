import { useState } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';
import ProfilePage from './components/ProfilePage';
import ThumbCard from './components/reuseable/ThumbCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Container>
        <Loginpage />
      </Container> */}
      {/* <Container>
        <ProfilePage/>
      </Container> */}
      <ThumbCard/>
    </div>
  );
}

export default App;
