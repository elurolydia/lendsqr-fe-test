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
// import Pagination from './Pagination';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        ' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users '
      );
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='dashboard'>
      <h1>Users</h1>
      <div className='cards'>
        <div>
          <img src={pinkUsers} alt='' />
          <small>USERS</small>
          <p>2,453</p>
        </div>
        <div>
          <img src={blueUsers} alt='' />
          <small>ACTIVE USERS</small>
          <p>2,453</p>
        </div>
        <div>
          <img src={loanUsers} alt='' />
          <small>USERS WITH LOANS</small>
          <p>12,453</p>
        </div>
        <div>
          <img src={savingsUsers} alt='' />
          <small>USERS WITH SAVINGS</small>
          <p>102,453</p>
        </div>
      </div>

      <table>
        <thead>
          <th>
            <h3>ORGANIZATION</h3>
            <img src={pyramid} alt='' />
          </th>
          <th>
            <h3>USERNAME</h3>
            <img src={pyramid} alt='' />
          </th>
          <th>
            <h3>EMAIL</h3>
            <img src={pyramid} alt='' />
          </th>
          <th>
            <h3>PHONE NUMBER</h3>
            <img src={pyramid} alt='' />
          </th>
          <th>
            <h3>DATE JOINED</h3>
            <img src={pyramid} alt='' />
          </th>
          <th>
            <h3>STATUS</h3>
            <img src={pyramid} alt='' />
          </th>
        </thead>
        <tbody>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00 AM</td>
          <td className='withBurger'>
            <p>Inactive</p>
            <img src={burger} alt='' />
          </td>
        </tbody>
        {currentUsers.map((user) => {
          return (
            <tbody key={user.id}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.profile.phoneNumber}</td>
              <td>{Date.parse(user.createdAt)}</td>
              <td className='withBurger'>
                <p>Inactive</p>
                <img src={burger} alt='' />
              </td>
            </tbody>
          );
        })}
      </table>

      <div>
        <Paginate
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default Dashboard;
