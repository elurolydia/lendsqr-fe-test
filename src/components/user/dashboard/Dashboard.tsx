import {
  blueUsers,
  burger,
  loanUsers,
  pinkUsers,
  pyramid,
  savingsUsers,
} from '../../../assets/Icons';
import './Dashboard.scss';

const Dashboard = () => {
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
          <td>
            Inactive <img src={burger} alt='' />
          </td>
        </tbody>
      </table>

      <div></div>
    </div>
  );
};

export default Dashboard;
