import React, { Component } from 'react';
import RoomList from "./RoomList.js";
import MessageList from "./MessageList.js";
import User from "./User.js";
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBY71pssu4I5cYjq4xnv1t6d6s0s0m9AKo",
    authDomain: "my-app-112999.firebaseapp.com",
    databaseURL: "https://my-app-112999.firebaseio.com",
    projectId: "my-app-112999",
    storageBucket: "my-app-112999.appspot.com",
    messagingSenderId: "902650946653"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoomName: "",
      user: "Guest"

     }
    }
    setActiveRoom(e){
      console.log(e)
      let newHighlight = e.key;
      this.setState({activeRoomName: newHighlight});
    }

    setUser(user) {
      this.setState({ user: user || "Guest" })
    }
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}
        activeRoomName = {this.state.activeRoomName}
        setActiveRoom={(e) => this.setActiveRoom(e)}
        setUser={(user) => this.setUser(user)}
        user={this.state.user}/>
        <MessageList firebase={firebase}
        activeRoomName = {this.state.activeRoomName}
        setuser={(user) => this.setUser(user)}
        user={this.state.user}/>
        <User firebase={firebase}
          user={this.state.user}
          setUser={(user) => this.setUser(user)}/>
      </div>
    );
  }
}

export default App;
