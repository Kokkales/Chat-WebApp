import classes from './FriendsList.module.css';
import FriendItem from '../items/FriendItem';

function FriendsList(props) {
  // console.log('Ï am the list' + props.data);
  return (
    <ul className={classes.friendsList}>
      {/* map data in friend component */}
      {props.data.map((friend) => (
        <li key={friend.key}>
          <FriendItem
            // key={friend.key}
            sender={friend.sender}
            reciever={friend.reciever}
            senderActivity={friend.sender_activity}
            recieverActivity={friend.reciever_activity}
            status={friend.status}
            content={friend.content}
          />
        </li>
      ))}
      {/* {props.items.map((divorce) => (
        <DivorceItem
          key={divorce.id}
          id={divorce.id}
          status={divorce.status}
          spouseOne={divorce.spouseOneName}
          spouseTwo={divorce.spouseTwoName}
          // image={meetup.image}
          onClick={props.onClick}
          role={props.role}
          type={props.type}
          page={props.page}
        />
      ))} */}
    </ul>
  );
}

export default FriendsList;
