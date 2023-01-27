import React from 'react';
import { filledStar, longArrowLeft, star } from '../../../../assets/Icons';
import { customer } from '../../../../assets/Images';
import './Details.scss';

const Details = () => {
  return (
    <div className='details'>
      <div className='back'>
        <img src={longArrowLeft} alt='' />
        Back to Users
      </div>

      <div className='userDetails'>
        <h1>User Details</h1>
        <div>
          <p>BLACKLIST USER</p>
          <p>ACTIVATE USER</p>
        </div>
      </div>

      <div className='userTitle'>
        <div>
          <img src={`/${customer}`} alt='' />
          <div className='grace'>
            <p>Grace Effiom</p>
            <p>LSQFf587g90</p>
          </div>
          <div>
            <p>User’s Tier</p>
            <p>
              <img src={filledStar} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
            </p>
          </div>
          <div>
            <p>₦200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div>
        <div>
          <h3>Personal Information</h3>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Personal Information</h3>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Personal Information</h3>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Personal Information</h3>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Personal Information</h3>
          <div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Full Name</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
