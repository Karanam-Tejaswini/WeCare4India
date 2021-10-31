import React, { Component } from "react";
import "./bodypage.css";
import illustration from "./Illustration1.png";
import NavBar from "./NavBar";
export default class Bodypage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container1">
          <div className="body-left">
            <div className="body-left-content1">
              <div className="text1">
                  Want to add meaning to your education
              </div>
            </div>
            <div className="body-left-content2">
              <p className="text2">
                WCI employee volunteers district wise to connect easily with the
                rural children.Updating and managing various rural school information
                viz.updating school’s status, basic school details, location.
              </p>
            </div>
            <div className="body-left-content3">
              <button className="connect-btn">Connect</button>
            </div>
          </div>
        <div className="body-right">
          <img src={illustration} alt="quiz" className="Image"></img>
        </div>
        </div>
        <div className="icons">
        <div className="icon-1">
          <div className="svg">
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="55" height="55" rx="27.5" fill="#FFECEC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5016 26.3001C28.4563 26.3001 29.372 25.9208 30.0471 25.2457C30.7223 24.5706 31.1016 23.6549 31.1016 22.7001C31.1016 21.7453 30.7223 20.8296 30.0471 20.1545C29.372 19.4794 28.4563 19.1001 27.5016 19.1001C26.5468 19.1001 25.6311 19.4794 24.956 20.1545C24.2808 20.8296 23.9016 21.7453 23.9016 22.7001C23.9016 23.6549 24.2808 24.5706 24.956 25.2457C25.6311 25.9208 26.5468 26.3001 27.5016 26.3001ZM22.4002 37.1001C20.5784 37.1001 19.0438 35.5687 19.741 33.8856C20.1631 32.8664 20.7819 31.9404 21.5619 31.1604C22.3419 30.3804 23.2679 29.7616 24.287 29.3395C25.3062 28.9174 26.3985 28.7001 27.5016 28.7001C28.6047 28.7001 29.697 28.9174 30.7161 29.3395C31.7352 29.7616 32.6612 30.3804 33.4413 31.1604C34.2213 31.9404 34.84 32.8664 35.2622 33.8856C35.9593 35.5687 34.4247 37.1001 32.6029 37.1001H22.4002Z" fill="#F53838"/>
          </svg>
          </div>
          <div className="teachers1">
          <p className="text3">Teacher</p>
          <p className="text4">100 Volunteers</p>
          </div>
           
        </div>
        <div className="icon-2">
           <div className="svg">
           <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="55" height="55" rx="27.5" fill="#FFECEC"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5016 26.3001C28.4563 26.3001 29.372 25.9208 30.0471 25.2457C30.7223 24.5706 31.1016 23.6549 31.1016 22.7001C31.1016 21.7453 30.7223 20.8296 30.0471 20.1545C29.372 19.4794 28.4563 19.1001 27.5016 19.1001C26.5468 19.1001 25.6311 19.4794 24.956 20.1545C24.2808 20.8296 23.9016 21.7453 23.9016 22.7001C23.9016 23.6549 24.2808 24.5706 24.956 25.2457C25.6311 25.9208 26.5468 26.3001 27.5016 26.3001ZM22.4002 37.1001C20.5784 37.1001 19.0438 35.5687 19.741 33.8856C20.1631 32.8664 20.7819 31.9404 21.5619 31.1604C22.3419 30.3804 23.2679 29.7616 24.287 29.3395C25.3062 28.9174 26.3985 28.7001 27.5016 28.7001C28.6047 28.7001 29.697 28.9174 30.7161 29.3395C31.7352 29.7616 32.6612 30.3804 33.4413 31.1604C34.2213 31.9404 34.84 32.8664 35.2622 33.8856C35.9593 35.5687 34.4247 37.1001 32.6029 37.1001H22.4002Z" fill="#F53838"/>
           </svg>
           <div className="teachers">
           <p className="text3">Students</p>
           <p className="text4">400 kids</p>
          </div>
           </div>
           
        </div>
          <div className="icon-3">
          <div className="svg">
          <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.0493164" width="55" height="55" rx="27.5" fill="#FFECEC"/>
          <path d="M35.5 18.5493H19.5C18.9696 18.5493 18.4609 18.76 18.0858 19.1351C17.7107 19.5102 17.5 20.0189 17.5 20.5493V24.5493C17.5 25.0797 17.7107 25.5885 18.0858 25.9635C18.4609 26.3386 18.9696 26.5493 19.5 26.5493H35.5C36.0304 26.5493 36.5391 26.3386 36.9142 25.9635C37.2893 25.5885 37.5 25.0797 37.5 24.5493V20.5493C37.5 20.0189 37.2893 19.5102 36.9142 19.1351C36.5391 18.76 36.0304 18.5493 35.5 18.5493ZM30.5 22.5493C30.5 23.1016 30.0523 23.5493 29.5 23.5493C28.9477 23.5493 28.5 23.1016 28.5 22.5493C28.5 21.997 28.9477 21.5493 29.5 21.5493C30.0523 21.5493 30.5 21.997 30.5 22.5493ZM34.5 22.5493C34.5 23.1016 34.0523 23.5493 33.5 23.5493C32.9477 23.5493 32.5 23.1016 32.5 22.5493C32.5 21.997 32.9477 21.5493 33.5 21.5493C34.0523 21.5493 34.5 21.997 34.5 22.5493ZM35.5 28.5493H19.5C18.9696 28.5493 18.4609 28.76 18.0858 29.1351C17.7107 29.5102 17.5 30.0189 17.5 30.5493V34.5493C17.5 35.0798 17.7107 35.5885 18.0858 35.9635C18.4609 36.3386 18.9696 36.5493 19.5 36.5493H35.5C36.0304 36.5493 36.5391 36.3386 36.9142 35.9635C37.2893 35.5885 37.5 35.0798 37.5 34.5493V30.5493C37.5 30.0189 37.2893 29.5102 36.9142 29.1351C36.5391 28.76 36.0304 28.5493 35.5 28.5493ZM30.5 32.5493C30.5 33.1016 30.0523 33.5493 29.5 33.5493C28.9477 33.5493 28.5 33.1016 28.5 32.5493C28.5 31.997 28.9477 31.5493 29.5 31.5493C30.0523 31.5493 30.5 31.997 30.5 32.5493ZM34.5 32.5493C34.5 33.1016 34.0523 33.5493 33.5 33.5493C32.9477 33.5493 32.5 33.1016 32.5 32.5493C32.5 31.997 32.9477 31.5493 33.5 31.5493C34.0523 31.5493 34.5 31.997 34.5 32.5493Z" fill="#F53838"/>
          </svg>
          <div className="teachers">
          <p className="text3">Volunteers</p>
          <p className="text4">150 Volunteers</p>
          </div>
          </div>
          </div>
      </div>
      </div>
    );
  }
}
