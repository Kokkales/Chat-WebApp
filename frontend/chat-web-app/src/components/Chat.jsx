import classes from './Chat.module.css';
import Card from './ui/Card';
import MessageItem from './items/MessageItem';
import sendIcon from '../images/send.png';
import infoIcon from '../images/info.png';
import userIcon from '../images/user.png';
import phoneIcon from '../images/telephone.png';
function Chat(props) {
  return (
    <Card>
      <div className={classes.chat}>
        <section className={classes.detailsSection}>
          <div className={classes.profilePictureBox}>
            <img width={'50px'} height={'50px'} src={userIcon} alt="user" />
          </div>
          <div className={classes.userNameBox}>
            <h4 className={classes.userName}>John Doe</h4>
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
        <section className={classes.chatSection}>
          <MessageItem text="Hello John" type="reciever" />
          <MessageItem text="Hello Mike" type="sender" />

          <MessageItem text="How are you" type="reciever" />
          <MessageItem text="Good how are you?" type="sender" />
          <MessageItem text="ok  " type="sender" />

          <MessageItem
            text="this is a new chat app that I am building for my portfolio"
            type="reciever"
          />
          <MessageItem
            text="Lorem ipsum dolor sit, amet consectetur a"
            type="reciever"
          />
          {/* <MessageItem
            text="Studyiiinggggggggggggggggggggggggggggggggggggggggggg"
            type="reciever"
          /> */}
          <MessageItem
            text="LorLorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti animi dolorum architectoem"
            type="sender"
          />
          <MessageItem
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti animi dolorum architecto corrupti eum recusandae repellendus accusamus ea quaerat aliquid esse quod amet quo dolor, quidem adipisci, neque odio doloremque!"
            type="reciever"
          />
        </section>
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
