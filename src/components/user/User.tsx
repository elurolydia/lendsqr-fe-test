import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Filter from './Filter';
import Details from './Details';

const User = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '40px 40px 0 40px', width: '75%' }}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route path='user/filter' element={<Filter />} />
            <Route path='user/details' element={<Details />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default User;
