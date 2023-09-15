import classes from './FriendsList.module.css';
import FriendItem from '../items/FriendItem';

function FriendsList(props) {
  return (
    <ul className={classes.friendsList}>
      {/* map data in friend component */}
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
      <li>
        <FriendItem />
      </li>
    </ul>
  );
}

export default FriendsList;
