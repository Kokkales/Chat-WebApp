import classes from './LastChatItem.module.css';
import Card from '../ui/Card';
import userIcon from '../../images/user.png';
// import circle from '../../images/black-circle.png';
import axios from 'axios';
import { useState } from 'react';

function LastChatItem(props) {
  const [conversation, setConversation] = useState([]);
  const [isConversation, setIsConversation] = useState(false);
  function lastChatOnClickHandler(event) {
    event.preventDefault();
    console.log(
      `last chat clicked with senderId::${props.senderId} and receiver id::${props.receiverId}`
    );
    try {
      axios
        .get(
          `http://localhost:3001/getConversation?id=${props.senderId}&friendId=${props.receiverId}`,
          {
            headers: {
              // Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
          }
        )
        .then((response) => {
          const data = response.data;
          // console.log('FULL CONVERTATION:::: ', data);
          const messages = [];
          for (const key in data) {
            const message = {
              key: key,
              ...data[key],
            };
            if (props.senderUserName) {
              messages.toUsername = props.senderUserName;
            } else {
              messages.toUsername = props.receiverUserName;
            }
            messages.push(message);
          }
          setConversation(messages);
          props.sendDataToMainChatPage(messages);
          // sendDataToMainChatPage(messages);
          console.log('Convertation:::', messages);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <div className={classes.lastChatItem} onClick={lastChatOnClickHandler}>
        <section className={classes.statusSection}>
          {props.senderActivity == true && (
            <div className={classes.onlineStatusCircle}></div>
          )}
          {props.senderActivity == false && (
            <div className={classes.offlineStatusCircle}></div>
          )}
        </section>
        <section className={classes.profilePictureSection}>
          <div className={classes.userProfilePicture}>
            <img width={'50px'} height={'50px'} src={userIcon} alt="user" />
          </div>
          <div className={classes.userNameBox}>
            <h4 className={classes.userName}>
              {props.senderUserName}
              {props.receiverUserName}
            </h4>
          </div>
        </section>
        {/* <section className={classes.userNameSection}> */}
        {/* </section> */}
        <section className={classes.lastMessageSection}>
          <p>{props.content}</p>
        </section>
      </div>
    </Card>
  );
}

export default LastChatItem;
