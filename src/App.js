import './App.css';
//import { useState } from 'react';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
//import Sidebar from './components/Sidebar';

function App() {
  //const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <Navbar />
      <Notes />

    </>
  );
}

export default App;
