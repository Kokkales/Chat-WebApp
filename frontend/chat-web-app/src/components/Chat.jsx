import classes from './Chat.module.css';
import Card from './ui/Card';
import MessageItem from './items/MessageItem';
import MessagesList from './lists/MessagesList';
import sendIcon from '../images/send.png';
import infoIcon from '../images/info.png';
import userIcon from '../images/user.png';
import phoneIcon from '../images/telephone.png';
import { useEffect, useState } from 'react';
function Chat(props) {
  const [convertation, setConvertation] = useState(props.convertation);
  useEffect(() => {
    setConvertation(props.convertation);
    console.log('I AM THE PROPS::::::', props.convertation);
    console.log('I AM THE CHAT::::::', convertation);
  }, [props.convertation]);

  console.log('I AM OUTSIDE::::::', convertation);
  return (
    <Card>
      <div className={classes.chat}>
        <section className={classes.detailsSection}>
          <div className={classes.profilePictureBox}>
            <img width={'50px'} height={'50px'} src={userIcon} alt="user" />
          </div>
          <div className={classes.userNameBox}>
            <h4 className={classes.userName}>{convertation.toUsername}</h4>
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
          <MessagesList data={convertation} />
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
