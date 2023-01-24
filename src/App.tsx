import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LoginView from './pages/LoginView';
import UserView from './pages/UserView';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className='App'>
    //   <h1>Hello world</h1>Hello world
    // </div>

    <Routes>
      <Route path='/' element={<LoginView />} />
      <Route path='/user' element={<UserView />} />
    </Routes>
  );
}

export default App;
