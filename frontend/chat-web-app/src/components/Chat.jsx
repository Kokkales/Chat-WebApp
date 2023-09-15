import classes from './Chat.module.css';
import Card from './ui/Card';
import sendIcon from '../components/send.png';
import infoIcon from '../components/info.png';
import userIcon from '../components/user.png';
import phoneIcon from '../components/telephone.png';
function Chat(props) {
  return (
    <Card>
      <div className={classes.chat}>
        <section className={classes.detailsSection}>
          <div className={classes.profilePictureBox}>
            <img width={'50px'} height={'50px'} src={userIcon} alt="user" />
          </div>
          <div className={classes.userNameBox}>
            <h4 className={classes.userName}>Dea Karam</h4>
          </div>
          <div className={classes.optionsBox}>
            <img
              width={'30px'}
              height={'30px'}
              src={phoneIcon}
              alt="phone"
              className={classes.optionsIcon}
            />
            <img
              width={'30px'}
              height={'30px'}
              src={infoIcon}
              alt="info"
              className={classes.optionsIcon}
            />
          </div>
        </section>
        <section className={classes.chatSection}></section>
        <section className={classes.textSection}>
          <div className={classes.textBox}>
            <input
              className={classes.inputField}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <button className={classes.sendButton}>
            <img width={'30px'} height={'30px'} src={sendIcon} alt="send" />
          </button>
          {/* <div className={classes.buttonBox}> */}
          {/* </div> */}
        </section>
      </div>
    </Card>
  );
}

export default Chat;
