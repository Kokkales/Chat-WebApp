import classes from './FriendsList.module.css';
import FriendItem from '../items/FriendItem';

function FriendsList(props) {
  {
    props.data.map((friend) => {
      console.log(friend.key);
    });
  }
  return (
    <ul className={classes.friendsList}>
      {props.data.map((friend) => (
        <li key={friend.key}>
          <FriendItem
            key={friend.key}
            id={friend.id}
            username={friend.username}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
