import React, { Component } from 'react'
import '../Students_Dashboard/Students_Dashboard'
import Image_8 from './Image_8.jpg'
import Image_9 from './Image_9.jpg'
import Image_10 from './Image_10.jpg'
import Image_11 from './Image_11.jpg'
// import Image_5 from './Image_5.jpg'
// import Image_6 from './Image_6.jpg'
// import Image_7 from './Image_7.jpg'
export class Teachers_Dashboard extends Component {
    render() {
        return (
            <div className="Students_container">
               <div className="heading">
                  Teacher's Dashboard
               </div> 
               <div className="Images">
                 <div className="Image_Row">
                   <div className="Image_each">
                   <img src={Image_8}/>
                   <div className="content">Classes</div>
                   </div>
                   <div className="Image_each">
                   <img src={Image_9}/>
                   <div className="content">Students</div>
                   </div>
                 </div>
                 <div className="Image_Row">
                   <div className="Image_each">
                   <img src={Image_10}/>
                   <div className="content">Attendance</div>
                   </div>
                   <div className="Image_each">
                   <img src={Image_11}/>
                   <div className="content">Reports</div>
                   </div>
                 </div>
               </div>
            </div>
        )
    }
}

export default Teachers_Dashboard
