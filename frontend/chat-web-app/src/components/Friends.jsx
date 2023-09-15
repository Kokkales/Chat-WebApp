import classes from './Friends.module.css';
import FriendItem from './items/FriendItem';
import FriendsList from '../components/lists/FriendsList';

function Friends(props) {
  return (
    <div className={classes.friends}>
      <div className={classes.title}>
        {/* <p>this is a text</p> */}
        <h1> Chats</h1>
      </div>
      <div className={classes.friendsItemsList}>
        {/* render friends list component */}
        <FriendsList />
      </div>
    </div>
  );
}

export default Friends;
