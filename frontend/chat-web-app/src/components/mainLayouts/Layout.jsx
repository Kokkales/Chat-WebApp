import FooterLayout from './FooterLayout';
import MainNavigationLayout from './MainNavigationLayout';
import classes from './Layout.module.css';
function Layout(props) {
  return (
    <div className={classes.layout}>
      <section className={classes.mainNavigationLayout}>
        <MainNavigationLayout />
      </section>
      <section className={classes.mainContet}>{props.children}</section>
      <section className={classes.footerLayout}>
        <FooterLayout />
      </section>
    </div>
  );
}

export default Layout;
