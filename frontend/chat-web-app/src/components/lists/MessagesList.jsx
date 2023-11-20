import classes from './MessagesList.module.css';
import MessageItem from '../items/MessageItem';
import { useState, useEffect } from 'react';

function MeassagesList(props) {
  return (
    <ul className={classes.meassagesList}>
      {props.data.map((message) => (
        <li key={message.key}>
          <MessageItem
            key={message.key}
            id={message.id}
            content={message.messageContent}
            status={message.status}
            type={message.type}
            senderId={message.senderId}
            receiverId={message.receiverId}
            timestamp={message.timestamp}
          />
        </li>
      ))}
      {/* <li>
        <MessageItem text="Hello John" type="reciever" />
      </li>
      <li>
        <MessageItem text="Hello Mike" type="sender" />
      </li>
      <li>
        <MessageItem text="Hello Mike" type="sender" />
      </li> */}
    </ul>
  );
}

export default MeassagesList;
