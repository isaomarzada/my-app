import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({
        messages: this.state.messages.concat(message)
      })
    })
  }

  createMessage() {
    let timeStamp = new Date();
        timeStamp = timeStamp.toLocaleTimeString();
    this.messagesRef.push({
      content: this.state.newMessage,
      roomId: this.props.activeRoomName,
      username: this.props.user.displayName,
      sentAt: timeStamp
    });
    console.log(`this props user displayName`, this.props.user.displayName)
    console.log(`timestamp`, timeStamp)
    this.setState({ newMessage: '' });
  }

  handleChange(e) {
    this.setState({newMessage: e.target.value})
  }

  render() {
    return(
      <section>
      <ul>
      {this.state.messages.filter((message) => message.roomId === this.props.activeRoomName).map((message) =>
      <li key={message.key}>
        {message.content}
        </li>
      )}
      </ul>
      <form onSubmit={(e) => { e.preventDefault(); this.createMessage(this.state.newMessage)}} className="form">
        <label>Create New Message</label>
        <input type="text" value={this.state.newMessage} onChange={this.handleChange.bind(this)}/>
        <input type="submit"/>
      </form>
     </section>
    )
  }
}

export default MessageList
