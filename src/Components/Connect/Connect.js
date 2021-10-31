import React, { Component } from "react";
import "./Connect.css"
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";



export default class Connect extends Component {
 
  render() {
   
    return (
      <div className="Cards-section-1"> 
      <h1>Connect</h1>
      <div className="Cards-section">
      <Cards1 />


      <Cards2/>


      <Cards3 />
   


      </div>
      <div className="btn-1">
         
            <button type="button" id="btn" className="btn">  Join Our Community</button>
              
         
      </div>
      </div>
    );
  }
}