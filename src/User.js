import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: ""
      }
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.signInWithPopup()}>Sign In</button>
        <button onClick={() => this.signOut()}>Log Out</button>
        <h3>Active user: {this.props.user.displayName || "Guest"}</h3>
      </div>
    )
  }
}

export default User;
