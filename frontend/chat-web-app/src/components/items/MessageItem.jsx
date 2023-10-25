import classes from './MessageItem.module.css';
import Card from '../ui/Card';
function MessageItem(props) {
  return (
    <div>
      {props.type == 'receiver' && (
        <div className={classes.messageRowLeft}>
          <div className={classes.message}>
            {props.type == 'sender' && (
              <Card>
                <p className={classes.messageTextSender}>{props.content}</p>
              </Card>
            )}
            {props.type == 'receiver' && (
              <Card>
                <p className={classes.messageTextReciever}>{props.content}</p>
              </Card>
            )}
          </div>
        </div>
      )}
      {props.type == 'sender' && (
        <div className={classes.messageRowRight}>
          <div className={classes.message}>
            {props.type == 'sender' && (
              <Card>
                <p className={classes.messageTextSender}>{props.content}</p>
              </Card>
            )}
            {props.type == 'receiver' && (
              <Card>
                <p className={classes.messageTextReciever}>{props.content}</p>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageItem;
