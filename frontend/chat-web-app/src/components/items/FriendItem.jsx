import classes from './FriendItem.module.css';
import Card from '../ui/Card';
import userIcon from '../../images/user.png';
// import circle from '../../images/black-circle.png';

function FriendItem(props) {
  return (
    <Card>
      <div className={classes.friendItem}>
        <section className={classes.statusSection}>
          <div className={classes.statusCircle}></div>
        </section>
        <section className={classes.profilePictureSection}>
          <div className={classes.userProfilePicture}>
            <img width={'50px'} height={'50px'} src={userIcon} alt="user" />
          </div>
          <div className={classes.userNameBox}>
            <h4 className={classes.userName}>John Doe</h4>
          </div>
        </section>
        {/* <section className={classes.userNameSection}> */}
        {/* </section> */}
        <section className={classes.lastMessageSection}>
          <p>So what are we doing tommorow?</p>
        </section>
      </div>
    </Card>
  );
}

export default FriendItem;
