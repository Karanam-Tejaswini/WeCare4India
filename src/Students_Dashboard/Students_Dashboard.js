import React, { Component } from 'react'
import './Students_Dashboard.css'
import Image_4 from './Image_4.jpg'
import Image_5 from './Image_5.jpg'
import Image_6 from './Image_6.jpg'
import Image_7 from './Image_7.jpg'
export class Students_Dashboard extends Component {
    render() {
        return (
            <div className="Students_container">
               <div className="heading">
                   Student's Dashboard
               </div> 
               <div className="Images">
                 <div className="Image_Row">
                   <div className="Image_each">
                   <img src={Image_4}/>
                   <div className="content">My Classes</div>
                   </div>
                   <div className="Image_each">
                   <img src={Image_5}/>
                   <div className="content">Assignments</div>
                   </div>
                 </div>
                 <div className="Image_Row">
                   <div className="Image_each">
                   <img src={Image_6}/>
                   <div className="content">Time Table</div>
                   </div>
                   <div className="Image_each">
                   <img src={Image_7}/>
                   <div className="content">Doubts Section</div>
                   </div>
                 </div>
               </div>
            </div>
        )
    }
}

export default Students_Dashboard
