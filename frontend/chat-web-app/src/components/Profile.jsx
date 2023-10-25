import { useEffect, useState } from 'react';
import classes from './Profile.module.css';
import axios from 'axios';
import FriendItem from './items/FriendItem';
import FriendsList from './lists/FriendsList';

function Profile(props) {
  const [userData, setUserData] = useState({});
  const [userFriends, setUserFriends] = useState([{}]);
  useEffect(() => {
    try {
      axios
        .get('http://localhost:3001/getUserData?id=1', {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
        })
        .then((response) => {
          const data = response.data;
          // console.log('User Data:::: ', data);
          setUserData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }

    // console.log('I am use effect');
    try {
      axios
        .get('http://localhost:3001/getUserFriends?id=1', {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
        })
        .then((response) => {
          const data = response.data.userOneFriends;
          console.log('User Friends:::: ', data);
          const friends = [];
          for (const key in data) {
            const friend = {
              key: key,
              ...data[key],
            };
            friends.push(friend);
          }
          setUserFriends(friends);
          console.log('I am what is send', friends);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={classes.profileContent}>
      <section className={classes.profileSection}>
        <div className={classes.profileCircle}></div>
      </section>
      <section className={classes.profileDataSection}>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        <p>{userData.role}</p>
        {/* <p></p> */}
      </section>
      <section className={classes.allFriendsSection}>
        <div>
          <h3 className={classes.friendsTitle}>Friends</h3>
        </div>
        <FriendsList data={userFriends} />
      </section>
    </div>
  );
}

export default Profile;
