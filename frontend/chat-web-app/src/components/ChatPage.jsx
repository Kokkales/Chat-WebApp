import classes from './ChatPage.module.css';
import Friends from './Friends';
import Chat from './Chat';
import MainNavigationLayout from './mainLayouts/MainNavigationLayout';
import FooterLayout from './mainLayouts/FooterLayout';
import Layout from './mainLayouts/Layout';
function ChatPage(props) {
  return (
    <section className={classes.mainContent}>
      <section className={classes.friendsSection}>
        <Friends />
      </section>
      <section className={classes.chatSection}>
        <Chat />
      </section>
    </section>
  );
}

export default ChatPage;
