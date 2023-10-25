import classes from './LastChats.module.css';
import LastChatItem from './items/LastChatItem';
import LastChatsList from './lists/LastChatsList';
import FriendItem from './items/FriendItem';

import { useEffect, useState } from 'react';
import axios from 'axios';

function LastChats(props) {
  const [shortsArray, setShortsArray] = useState([]);
  useEffect(() => {
    try {
      axios
        .get('http://localhost:3001/getLastMessage?id=1', {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          // withCredentials: true, // Correct usage: Boolean value
        })
        .then((response) => {
          const data = response.data;
          console.log('Shorts::', data);
          const shorts = [];
          for (const key in data) {
            const short = {
              key: key,
              ...data[key],
            };
            shorts.push(short);
            setShortsArray(shorts);
          }
          // console.log(shortsArray);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [childConvertation, setChildConvertation] = useState([]);

  function receivedConvertationFromChild(receivedData) {
    setChildConvertation(receivedData);
    props.sendDataToMainChatPage(receivedData);
    console.log('I ΑΜ THE SECOND LIST ', childConvertation);
  }

  return (
    <div className={classes.friends}>
      <div className={classes.title}>
        {/* <p>this is a text</p> */}
        <h1> Chats</h1>
      </div>
      <div className={classes.friendsItemsList}>
        {/* render friends list component */}
        <LastChatsList
          data={shortsArray}
          sendDataToMainChatPage={receivedConvertationFromChild}
        />
        {/*
        <FriendItem />
        <FriendItem />
        <FriendItem /> */}
      </div>
    </div>
  );
}

export default LastChats;
