// import React {useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import {
  activate,
  blacklist,
  blueUsers,
  burger,
  loanUsers,
  pinkUsers,
  pyramid,
  savingsUsers,
  view,
} from '../../../assets/Icons';

const Pagination = (props) => {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
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
              <div className='burgerPopUp'>
                <ul>
                  <li>
                    <img src={view} alt='' />
                    View Details
                  </li>
                  <li>
                    <img src={blacklist} alt='' />
                    Blacklist User
                  </li>
                  <li>
                    <img src={activate} alt='' />
                    Activate User
                  </li>
                </ul>
              </div>
            </td>
          </tbody>
          {currentItems.map((user) => {
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
      </div>
      <div className='foot'>
        <div className='p'>
          Showing <p>{itemOffset / pageCount + 1}</p> out of {pageCount}{' '}
        </div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel='<'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </div>
    </>
  );
};

export default Pagination;
