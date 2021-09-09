import React, { useState } from "react";
import "../../App.css";
import UofTDot from "../../Images/Universities/uoft.png";
import RedDot from "../../Images/pin.svg";
import Uoft from "./UofT.js"
import Ryerson from "./Ryerson.js"

class UofT extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        isVisible: false,
        keepPopupAlive: false,
        count : 0,
        firstTime: false
    }
  }
  incrementCount(){
      this.setState({count: this.state.count+1})
      console.log(this.state.count)
  }
  decrementCount(){
    this.setState({count: this.state.count-1, firstTime: true})
    console.log(this.state.count)
  }
  resetCount(){
    this.setState({count: 0})
}
  render(){
  return (
        this.state.count == 0 ?
        <Uoft visi={this.state.firstTime} incre={this.incrementCount.bind(this)} reset={this.resetCount.bind(this)}/> : 
        <Ryerson
        visi={true}
        decre={this.decrementCount.bind(this)}
        reset={this.resetCount.bind(this)} />
  );}
}

const hoverStyle = {
  display: "block",
  border: "2px solid white",
  backgroundColor: "#fcfdfd",
  width: "10%",
  // height: "10%",
  color: "#1a5d57",
  borderRadius: "0.8em",
  position: "absolute",
  left: "19.5%",
  top: "17%",
  boxShadow: "0px 3px 20px #333333",
};

export default UofT;
