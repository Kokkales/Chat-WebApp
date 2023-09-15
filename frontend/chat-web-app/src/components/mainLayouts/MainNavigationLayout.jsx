import classes from './MainNavigationLayout.module.css';
import logoPng from './chat.png';
import options from './menu.png';
function MainNavigationLayout() {
  return (
    <nav className={classes.mainNavigation}>
      <section className={classes.logoSection}>
        <div className={classes.logoBox}>
          <img src={logoPng} alt="logo" width={'60px'} height={'60px'} />
          <h2>ChatWebApp</h2>
        </div>
      </section>
      <section className={classes.optionsSection}>
        <div className={classes.optionsBox}>
          <img src={options} alt="logo" width={'40px'} height={'40px'} />
        </div>
      </section>
    </nav>
  );
}

export default MainNavigationLayout;
