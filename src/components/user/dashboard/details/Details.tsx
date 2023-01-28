import React from 'react';
import { filledStar, longArrowLeft, star } from '../../../../assets/Icons';
import { customer } from '../../../../assets/Images';
import './Details.scss';
import { Link, useLocation } from 'react-router-dom';

const Details = (props) => {
  const location = useLocation();
  const user = location.state?.user;

  // console.log(user);

  return (
    <div className='details'>
      <div className='back'>
        <Link to='/user'>
          <img src={longArrowLeft} alt='' />
          Back to Users
        </Link>
      </div>

      <div className='userDetails'>
        <h1>User Details</h1>
        <div>
          <p>BLACKLIST USER</p>
          <p>ACTIVATE USER</p>
        </div>
      </div>

      <div className='userTitle'>
        <div className='userTitleInfo'>
          {/* <img src={`/${customer}`} alt='' className='customerImage' /> */}
          <img src={user.profile.avatar} alt='' className='customerImage' />
          <div className='grace'>
            <h2>{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
            <p>LSQFf587g90</p>
          </div>
          <div className='userTier'>
            <h6>User’s Tier</h6>
            <p>
              <img src={filledStar} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
            </p>
          </div>
          <div>
            <h2>₦200,000.00</h2>
            <p className='providusBank'>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className='navigation'>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className='fullDetails'>
        <div className='fullDetailsDiv'>
          <h3>Personal Information</h3>
          <div className='detailsGrid'>
            <div>
              <h4>FULL NAME</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>PHONE NUMBER</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>EMAIL ADDRESS</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>BVN</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>GENDER</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>MARITAL STATUS</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>CHILDREN</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>TYPE OF RESIDENCE</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>

        <div className='fullDetailsDiv'>
          <h3>Education and Employment</h3>
          <div className='detailsGrid'>
            <div>
              <h4>LEVEL OF EDUCATION</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>EMPLOYMENT STATUS</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>SECTOR OF EMPLOYMENT</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>DURATION OF EMPLOYMENT</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>OFFICE EMAIL</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>MONTHLY INCOME</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>LOAN REPAYMENT</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>

        <div className='fullDetailsDiv'>
          <h3>Socials</h3>
          <div className='detailsGrid'>
            <div>
              <h4>TWITTER</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>FACEBOOK</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>INSTAGRAM</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>

        <div className='fullDetailsDiv'>
          <h3>Guarantor</h3>
          <div className='detailsGrid'>
            <div>
              <h4>FULL NAME</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>PHONE MUNBER</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>EMAIL ADDRESS</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>RELATIONSHIP</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>

        <div className='fullDetailsDiv'>
          {/* <h3>Personal Information</h3> */}
          <div className='detailsGrid'>
            <div>
              <h4>FULL NAME</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>PHONE NUMBER</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>EMAIL ADDRESS</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>RELATIONSHIP</h4>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
