import './Navbar.scss';
import { arrowDown, bell, logo, search } from '../../../assets/Icons';
import { avatar } from '../../../assets/Images';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt='' />

      <div className='search'>
        <input type='text' placeholder='search for anything' />
        <span>
          <img src={search} alt='' />
        </span>
      </div>

      <div className='navDetails'>
        <span>Docs</span>
        <img src={bell} alt='' />

        <div className='avatarDetails'>
          <img src={avatar} alt='' />
          <span>Adedeji</span>
          <img src={arrowDown} alt='' className='arrow' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
