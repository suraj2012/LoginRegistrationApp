
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user && user._id?<Homepage user={user}/>:<Login setLoginUser={setLoginUser}/>}/>
        <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </Router>
  );
}

export default App;
