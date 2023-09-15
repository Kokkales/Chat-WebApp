import classes from './ChatPage.module.css';
import Friends from './Friends';
import Chat from './Chat';
import MainNavigationLayout from './mainLayouts/MainNavigationLayout';
import FooterLayout from './mainLayouts/FooterLayout';
function ChatPage(props) {
  //code here
  return (
    <div className={classes.content}>
      <section className={classes.navigation}>
        <MainNavigationLayout />
      </section>
      <section className={classes.friendsSection}>
        <Friends />
      </section>
      <section className={classes.chatSection}>
        <Chat />
      </section>
      <section className={classes.footerChat}>
        <FooterLayout />
      </section>
    </div>
  );
}

export default ChatPage;
