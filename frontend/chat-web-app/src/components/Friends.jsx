import classes from './Friends.module.css';
import FriendItem from './items/FriendItem';
import FriendsList from '../components/lists/FriendsList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Friends(props) {
  const [shortsArray, setShortsArray] = useState([]);
  useEffect(() => {
    try {
      axios
        .get('http://localhost:3001/getFriendsShortChats', {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          // withCredentials: true, // Correct usage: Boolean value
        })
        .then((response) => {
          const data = response.data;
          const shorts = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const short = {
                key: key,
                ...data[key],
              };
              shorts.push(short);
            }
            setShortsArray(shorts);
          }
          console.log(shortsArray);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={classes.friends}>
      <div className={classes.title}>
        {/* <p>this is a text</p> */}
        <h1> Chats</h1>
      </div>
      <div className={classes.friendsItemsList}>
        {/* render friends list component */}
        <FriendsList data={shortsArray} />
        {/* <FriendItem />
        <FriendItem />
        <FriendItem /> */}
      </div>
    </div>
  );
}

export default Friends;
