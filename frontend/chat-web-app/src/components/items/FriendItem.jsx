import classes from './FriendItem.module.css';
import Card from '../ui/Card';
import userIcon from '../../images/user.png';
// import circle from '../../images/black-circle.png';

function FriendItem(props) {
  return (
    // <Card>
    <div className={classes.friendItem}>
      <section className={classes.profilePicture}>
        <div className={classes.profileCircle}></div>
      </section>
      <section className={classes.usernameSection}>
        <p>{props.username}</p>
      </section>
    </div>
    // </Card>
  );
}

export default FriendItem;
