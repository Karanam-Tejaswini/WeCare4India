import React from "react";
import "./Work.css";
import image from "./group1.png";
// import image from './Image_10.png';
function work() {
  return (
    <div className="row">
      <div className="side">
        <img className="image" src={image}></img>
      </div>
      <div className="main">
        <div className="heading">
          <p>We are connecting with rural kids through our NGO volunteers</p>
        </div>
        <div className="list">
          <p>You can be volunteer if you want to contribute.Contribution can be sharing knowledge can be funding</p>
          <ul>
            <li>
              <p>Weekly Catch up</p>
            </li>
            <li>
              <p>Regular meet.</p>
            </li>
            <li>
              <p>Connects you with your regional school</p>
            </li>
            <li>
              <p>Doubts session.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default work;
