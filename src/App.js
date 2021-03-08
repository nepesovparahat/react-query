import React, {useState} from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import './App.css';

const  App = () => {
  const [page, setPage] = useState('planets');
  return (
    <div className="App">
      <h1>Star wars</h1>
      <Navbar setPage = {setPage}/>
      <div className = "content-div">
        {page === 'planets' ? <Planets/> : <People/>}
      </div>
    </div>
  );
}

export default App;
