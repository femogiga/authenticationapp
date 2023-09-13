import { useState } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Container>
        <Loginpage />
      </Container>
    </div>
  );
}

export default App;
