import React from 'react'

import location from '../../assets/location.gif'
import thunder from '../../assets/thunder.gif'
import scamimg from '../../assets/scamimg.avif'
import pic1 from '../../assets/pic1.png'
import pic2h from '../../assets/pic2h.png'
import pic3h from '../../assets/pic3h.png'
import pic4h from '../../assets/pic4h.png'

const about = () => {
  return (

    <div className="about-section">
      
      {/* <div className="search-container">
        <div className="search-form">
          <input type="text" placeholder="Leaving from" />
          <input type="text" placeholder="Going to" />
          <input type="date" placeholder="Select date" />
          <button>Search</button>
        </div>
      </div> */}
      <div className="info-container">

      <div className="info-block">
        <h2>Automated Case Allocation and Therapist Matching</h2>
        <p>This feature ensures patients are efficiently assigned to therapists based on criteria such as therapist specialization, patient needs, and availability. The system uses smart matching algorithms, which not only speed up the assignment process but also improve the quality of care by connecting patients with the most suitable therapist.</p>
        <img src ="https://img.icons8.com/?size=50&id=ckrjM2xjKegD&format=gif"></img>
      </div>
      <div className="info-block">
        <h2>Streamlined Therapy Planning and Documentation</h2>
        <p>Therapists can create, update, and store personalized therapy plans and session notes digitally. Supervisors have instant access to these plans, enabling real-time review and feedback. This digitized documentation process ensures all records are well-organized, easily accessible, and secure, enhancing collaboration and efficiency across the team.</p>
        <img src={location}></img>
      </div>
      <div className="info-block">
        <h2>Real-Time Progress Tracking and Reporting</h2>
        <p>The platform tracks each therapy session and automatically reminds therapists to submit progress reports at regular intervals. Supervisors can review these reports and provide valuable feedback, allowing for timely adjustments to therapy plans as needed. This continuous tracking helps both therapists and patients visualize progress and stay motivated throughout the therapy journey.</p>
        <img src={thunder}></img>
      </div>
      </div>
      

       {/* <div className="extra-block">
      <img className="img-1" src={scamimg} alt="Safety Image" />
      <div className="text-content">
        <h2>Your safety is our priority</h2>
        <p>We are committed to ensuring the highest level of safety and well-being for our customers. Your trust and security are paramount to us.</p>
       
      </div> 
    </div> */}



    </div>
  )
}

export default about

