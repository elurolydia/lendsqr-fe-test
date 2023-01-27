import { Route, Routes } from 'react-router-dom';
import Dash from '../components/user/dashboard/Dash';
import Filter from '../components/user/Filter';
import Navbar from '../components/user/navbar/Navbar';
import Sidebar from '../components/user/sidebar/Sidebar';
import User from '../components/user/User';

import { Outlet } from 'react-router-dom';
import { search } from '../assets/Icons';
import { avatar } from '../assets/Images';

const UserView = () => {
  return (
    <div>
      <Navbar search={search} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '40px 40px 0 40px', width: '75%' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserView;
