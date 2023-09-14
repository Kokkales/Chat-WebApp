import ChatPageLayout from './mainLayouts/ChatPageLayout';
import classes from './ChatPage.module.css';
import Friends from './Friends';
import Chat from './Chat';
function ChatPage(props) {
  //code here
  return (
    <ChatPageLayout>
      <div className={classes.mainContent}>
        <section className={classes.friendsList}>
          <Friends />
        </section>
        <section className={classes.chat}>
          <Chat />
        </section>
      </div>
    </ChatPageLayout>
  );
}

export default ChatPage;
