import { Route, Routes } from 'react-router-dom';
import User from '../components/user/User';

const UserView = () => {
  return (
    <Routes>
      <Route path='/*' element={<User />} />
    </Routes>
  );
};

export default UserView;
