import React from 'react';

const Paginate = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href='#'>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
