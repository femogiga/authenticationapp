import { useState } from 'react';
import Loginpage from './components/Loginpage';
import Container from './components/reuseable/Container';

import ThumbCard from './components/reuseable/ThumbCard';
import Header from './components/Header';
import Profile from './components/Profile';
import EditPage from './components/EditPage';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

function App() {
  const [files, setFiles] = useState([]);
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
      <Loginpage />
    </div>
  );
}

export default App;
