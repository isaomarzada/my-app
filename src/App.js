import React, { Component } from 'react';
import RoomList from "./RoomList.js";
import MessageList from "./MessageList.js";
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
      acticeRoomName: ""}
    }
    setActiveRoom(e){
      console.log(e)
      let newHighlight = e.key;
      this.setState({activeRoomName: newHighlight})
    }
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase}
        activeRoomName = {this.state.activeRoomName}
        setActiveRoom={(e) => this.setActiveRoom(e)}/>
        <MessageList firebase={firebase}
        activeRoomName = {this.state.activeRoomName}/>
      </div>
    );
  }
}

export default App;
