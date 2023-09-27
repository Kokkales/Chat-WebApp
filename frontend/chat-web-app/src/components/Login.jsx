import classes from './Login.module.css';
import logoPng from '../images/chat.png';
import Card from './ui/Card';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();
    console.log('Button Clicked');
    navigate('/chat');
  }

  return (
    <div className={classes.loginContent}>
      <section className={classes.loginSection}>
        <div className={classes.logoBox}>
          <img src={logoPng} alt="logo" width={'140px'} height={'140px'} />
        </div>
        <div className={classes.userBox}>
          <div className={classes.inputBox}>
            <label>Username</label>
            <input type="text" />
          </div>
          <div className={classes.inputBox}>
            <label>Password</label>
            <input type="password" />
          </div>
          <div className={classes.loginBtnBox}>
            <button className={classes.loginBtn} onClick={loginHandler}>
              login
            </button>
          </div>
          <div className={classes.registerBox}>
            <a href="http://localhost:3000/register">Register Here!</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
