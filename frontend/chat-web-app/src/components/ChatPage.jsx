import classes from './ChatPage.module.css';
import LastChats from './LastChats';
import Chat from './Chat';
import MainNavigationLayout from './mainLayouts/MainNavigationLayout';
import FooterLayout from './mainLayouts/FooterLayout';
import Layout from './mainLayouts/Layout';
import { useState } from 'react';
function ChatPage(props) {
  const [childData, setChildData] = useState([]);

  function receivedConvertationFromChild(data) {
    setChildData(data);
    console.log('I am the last receiver::: ', data);
  }
  return (
    <section className={classes.mainContent}>
      <section className={classes.friendsSection}>
        <LastChats sendDataToMainChatPage={receivedConvertationFromChild} />
      </section>
      <section className={classes.chatSection}>
        <Chat convertation={childData} />
      </section>
    </section>
  );
}

export default ChatPage;
