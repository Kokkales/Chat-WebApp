import classes from './LastChatsList.module.css';
import FriendItem from '../items/FriendItem';
import LastChatItem from '../items/LastChatItem';
import { useState } from 'react';

function LastChatsList(props) {
  const [childData, setChildData] = useState([]);

  // Define a function to receive data from the child
  function receiveDataFromChild(data) {
    setChildData(data);
    props.sendDataToMainChatPage(data);
    console.log('::1::', data);
  }

  return (
    <ul className={classes.lastChatList}>
      {/* map data in friend component */}
      {props.data.map((chatItem) => (
        <li key={chatItem.key}>
          <LastChatItem
            key={chatItem.key}
            content={chatItem.messageContent}
            senderId={chatItem.senderId}
            receiverId={chatItem.receiverId}
            receiverUserName={chatItem.receiverUserName}
            senderUserName={chatItem.senderUserName}
            senderActivity={true}
            // senderActivity={chatItem.sender_activity}
            // recieverActivity={chatItem.reciever_activity}
            status={chatItem.status}
            // status={true}
            sendDataToMainChatPage={receiveDataFromChild}
          />
        </li>
      ))}
    </ul>
  );
}

export default LastChatsList;
