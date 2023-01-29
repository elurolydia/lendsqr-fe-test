import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import LoginView from './pages/LoginView';
import UserView from './pages/UserView';
import Details from './components/user/dashboard/details/Details';
import Dash from './components/user/dashboard/Dash';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginView />} />
      <Route path='/user' element={<UserView />}>
        <Route index element={<Dash />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
