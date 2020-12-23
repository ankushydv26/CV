/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import firebase from "./firebase";
import {Link} from "react-router-dom"

//css

import "./Style/feeback.css";

class feedback extends Component {
  constructor() {
    super();
    this.state = {
        email:"",
        feedback:"",
        name:"",
        date:new Date(),
      showPerson: false,
    };
  }
  //button
  togglePersonHandler = () => {
    const isVisible = this.state.showPerson;
    this.setState({
      showPerson: !isVisible,
    });
  };

  handleText = (e) =>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }


  sendFeed = () => {
    const db = firebase.firestore();
    db.collection("feedbacker").add({
      email:this.state.email,
      feedback:this.state.feedback,
      name:this.state.name,
      date:this.state.date
    })
    .then(function(){
      console.log("document send")
      window.location="."
    })
    .catch(function(err){
      console.log("something went wrong@@@@" + err)
    })
    
  }
  render() {
    let feedback = null;
    if (this.state.showPerson) {
      feedback = (
        <div className="feedback-card">
          <label className="ma2">Email </label>
          <input
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            onChange={this.handleText}
          />
          <br></br>
          <label className="ma2">Name </label>
          <input
            name="name"
            value={this.state.name}
            type="name"
            placeholder="name"
            onChange={this.handleText}
          />
          <br></br>
          <label className="ma1">Feedback or Message </label>
          <input
            name="feedback"
            type="text"
            value={this.state.feedback}
            placeholder="Type What in your mind"
            onChange={this.handleText}
            className="feedback-input"
          />
          <Button className="btn1"  onClick={this.sendFeed}>
              Send 
          </Button>
        </div>
      );
    }
    return (
      <div className="btn-class" >
        <button className="btn" onClick={this.togglePersonHandler}>
          Leave a message <span>😊 🖱️</span>
        </button>
        <Link to="/next" >
          <button className="btn-nxt" >
            Next Page
          </button>
        </Link>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          
        </div>
        {feedback}
      </div>
    );
  }
}

export default feedback;
