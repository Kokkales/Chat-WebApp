import classes from './ChatPageLayout.module.css';
import FooterLayout from './FooterLayout';
import MainNavigationLayout from './MainNavigationLayout';

function ChatPageLayout(props) {
  return (
    <div className={classes.chatPageLayout}>
      <section className={classes.mainNavigation}>
        <MainNavigationLayout />
      </section>
      <section className={classes.chatPage}>{props.children}</section>
      <section className={classes.footer}>
        <FooterLayout />
      </section>
    </div>
  );
}

export default ChatPageLayout;

// <section className={classes.usersSection}>{ props.children}</section>
// <section className={classes.chatsSection}>{ props.children}</section>
// <section className={classes.conversationSection}></section>
