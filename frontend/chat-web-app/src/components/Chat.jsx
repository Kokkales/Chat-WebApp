import classes from './Chat.module.css';
import Card from './ui/Card';
import sendIcon from '../components/send.png';
import infoIcon from '../components/info.png';
import userIcon from '../components/user.png';
import phoneIcon from '../components/telephone.png';
// import Message from './Message';
import MessageItem from './items/MessageItem';
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
        <section className={classes.chatSection}>
          <MessageItem text="Hello Dea" type="reciever" />
          <MessageItem text="Hello Kostas" type="sender" />

          <MessageItem text="How are you" type="reciever" />
          <MessageItem text="Good how are you?" type="sender" />
          <MessageItem text="Good how are you?" type="sender" />
          <MessageItem text="Good how are you?" type="sender" />

          <MessageItem text="Studyiiinggg" type="reciever" />
          <MessageItem text="Studyiiinggg" type="reciever" />
          <MessageItem
            text="Studyiiinggggggggggggggggggggggggggggggggggggggggggg"
            type="reciever"
          />
          <MessageItem
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti animi dolorum architecto corrupti eum recusandae repellendus accusamus ea quaerat aliquid esse quod amet quo dolor, quidem adipisci, neque odio doloremque!"
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
