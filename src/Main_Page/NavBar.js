import React, { Component } from 'react'
import './NavBar.css'
export class NavBar extends Component {
    render() {
        return (
            <div className="Nav_Container">
                <ul className="Nav_List">
                  <li className="li"><a href="default.asp">About</a></li>
                  <li className="li"><a href="news.asp">Connect</a></li>
                  <li className="li"><a href="contact.asp">Activities</a></li>
                  <li className="li"><a href="about.asp">Teachers</a></li>
                  <li className="li"><a href="about.asp">Students</a></li>
                </ul>
                <p className="Signin">Signin</p>
                <p className="Signup">SignUp</p>
            </div>
        )
    }
}

export default NavBar
