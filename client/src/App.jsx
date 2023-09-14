import { useState } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';

import ThumbCard from './components/reuseable/ThumbCard';
import Header from './components/Header';
import Profile from './components/Profile';
import EditPage from './components/EditPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Container>
        <Loginpage />
      </Container> */}
      {/* <Container>
        <Header />
        <Profile />
      </Container> */}
      {/* <Container>
        <Header />
        <EditPage/>
      </Container> */}
      <Loginpage/>
    </div>
  );
}

export default App;
