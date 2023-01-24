import { welcome } from '../../assets/Images';
import { logo } from '../../assets/Icons';
import './Login.scss';

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='loginPage'>
      <section>
        <header>
          <img src={logo} alt='' />
        </header>

        <div className='welcomeImg'>
          <img src={welcome} alt='' />
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        <div>
          <input type='email' placeholder='Email' />
        </div>

        <div>
          <input type='password' placeholder='Password' />
          <span>SHOW</span>
        </div>

        <p className='forgotPassword'>FORGOT PASSWORD?</p>
        <button>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
