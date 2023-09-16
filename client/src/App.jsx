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
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        // server='/api'
        server='http://res.cloudinary.com/dmaakpayw'
        name='files'
        labelIdle='<span class="material-symbols-outlined">
photo_camera
</span>'
      />
    </div>
  );
}

export default App;
