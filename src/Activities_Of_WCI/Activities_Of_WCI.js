import React, { Component } from 'react'
import './Activities_Of_WCI.css'
import Image_1 from './Image_1.jpg'
import Image_2 from './Image_2.jpg'
import Image_3 from './Image_3.jpg'
export class Activities_Of_WCI extends Component {
    render() {
        return (
            <div className="container">
                <div className="Image_Container"> 
                <div>
                      <img src={Image_1} className="Image"/>
                      <div className="Image_font">
                          Campaigning
                      </div>
                </div>
                <div>
                     <img src={Image_2} className="Image"/>
                     <div className="Image_font">
                          Experimentation
                      </div>
                </div>
                <div>    
                     <img src={Image_3} className="Image"/>
                     <div className="Image_font">
                          Intercation
                      </div>
                </div> 
                </div> 
            </div>
        )
    }
}

export default Activities_Of_WCI
