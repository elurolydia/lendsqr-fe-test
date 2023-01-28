// import React {useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Fragment, useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  //popus
  const [burgerPopUp, setBurgerPopUp] = useState(false);

  //trying
  const [editId, setEditId] = useState({ id: 1, name: 'gem' });
  const [selectedDataId, setSelectedDataId] = useState(null);

  const handleBurger = (event, user) => {
    // event.currentTarget = 'button';
    // console.log(event.target.parentElement);
    setSelectedDataId(user.id);
    // setBurgerPopUp(false);
    // user.email = 'me';
  };

  const handleBurgerOff = (event, user) => setSelectedDataId(null);

  //continue
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
            <tr>
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
            </tr>
          </thead>
          {/* <tbody>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td className='withBurger'>
              <p>Inactive</p>
              <img src={burger} alt='' />
            </td>
          </tbody> */}
          <tbody>
            {currentItems.map((user) => {
              return (
                <Fragment>
                  {selectedDataId === user.id ? (
                    <tr key={user.id}>
                      <td>{user.orgName}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.profile.phoneNumber}</td>
                      <td>{Date.parse(user.createdAt)}</td>
                      <td className='withBurger'>
                        <p>Inactive</p>
                        <img
                          src={burger}
                          alt=''
                          onClick={(event) => handleBurgerOff(event, user)}
                        />
                        <div className='burgerPopUp'>
                          <ul>
                            <li>
                              <Link
                                to='/user/details'
                                // state={{ selectedDataId: selectedDataId }}
                                state={{ user: user }}
                              >
                                {/* <Link
                                to={{
                                  pathname: '/user/details',
                                  state: {user},
                                }}
                              > */}
                                <img src={view} alt='' />
                                View Details
                              </Link>
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
                    </tr>
                  ) : (
                    <tr key={user.id}>
                      <td>{user.orgName}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.profile.phoneNumber}</td>
                      <td>{Date.parse(user.createdAt)}</td>
                      <td className='withBurger'>
                        <p>Inactive</p>

                        <img
                          src={burger}
                          alt=''
                          onClick={(event) => handleBurger(event, user)}
                        />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='foot'>
        <div className='p'>
          Showing <p>{currentItems.length ? itemOffset / pageCount + 1 : 0}</p>{' '}
          out of {pageCount}{' '}
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
