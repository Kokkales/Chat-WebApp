import classes from './MainNavigationLayout.module.css';
import logoPng from '../../images/chat.png';
import options from '../../images/menu.png';
import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import userProfileImg from '../../images/user.png';
function MainNavigationLayout() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const navigate = useNavigate();
  function profileIconClickHandler(event) {
    event.preventDefault();
    console.log('Profile Icon Clicked');
    setMenuIsClicked(!menuIsClicked);
  }
  function exitHandler(event) {
    event.preventDefault();
    console.log('Exit Clicked');
    setMenuIsClicked(false);
  }

  function returnToHomeHandler(event) {
    event.preventDefault();
    console.log('Profile Icon Clicked');
    navigate('/chat');
  }
  return (
    <nav className={classes.mainNavigation}>
      <section className={classes.logoSection}>
        <div className={classes.logoBox}>
          <img
            src={logoPng}
            alt="logo"
            width={'60px'}
            height={'60px'}
            onClick={returnToHomeHandler}
          />
          <h2 onClick={returnToHomeHandler}>ChatWebApp</h2>
        </div>
      </section>
      <section className={classes.optionsSection}>
        <div className={classes.optionsBox}>
          <img
            className={classes.userProfileImg}
            src={userProfileImg}
            alt="logo"
            width={'40px'}
            height={'40px'}
            onClick={profileIconClickHandler}
          />
        </div>
        {menuIsClicked && (
          <div className={classes.navSidebar} onMouseLeave={exitHandler}>
            <ul>
              <li>
                <img
                  className={classes.menuLogo}
                  src={userProfileImg}
                  alt="logo"
                  width={'40px'}
                  height={'40px'}
                  onClick={profileIconClickHandler}
                />
              </li>
              <li>
                <a href="http://localhost:3000/profile">Profile</a>
              </li>
              <li>
                <a href="http://localhost:3000/addfriend">Add Friend</a>
              </li>
              <li>
                <a href="http://localhost:3000/info">Info</a>
              </li>
            </ul>
          </div>
        )}
      </section>
    </nav>
  );
}

export default MainNavigationLayout;
