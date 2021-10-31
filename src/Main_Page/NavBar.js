import React, { Component } from 'react'
import './NavBar.css'
export class NavBar extends Component {
    render() {
        return (
            <div className="Nav_Container">
                <ul className="Nav_List">
                  <li className="li"><a href="default.asp">Home</a></li>
                  <li className="li"><a href="news.asp">News</a></li>
                  <li className="li"><a href="contact.asp">Contact</a></li>
                  <li className="li"><a href="about.asp">About</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
