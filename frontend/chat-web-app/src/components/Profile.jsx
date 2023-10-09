import classes from './Profile.module.css';

function Profile(props) {
  return (
    <div className={classes.profileContent}>
      <section className={classes.profileSection}>Profile</section>
      <section className={classes.profileDataSection}>Data</section>
      <section className={classes.allFriendsSection}>Friends</section>
    </div>
  );
}

export default Profile;
