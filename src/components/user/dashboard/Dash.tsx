import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  blueUsers,
  burger,
  loanUsers,
  pinkUsers,
  pyramid,
  savingsUsers,
} from '../../../assets/Icons';
import './Dashboard.scss';
import Paginate from './Paginate';
import Pagination from './Pagination';

const Dash = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        ' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users '
      );
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Pagination data={users} />
    </div>
  );
};

export default Dash;
