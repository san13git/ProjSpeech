// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';  //using props carry previous data of the form
// import './RideConfirmation.css';
// import RideRequests from './RideRequests';

// const RideConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { rideDetails } = location.state;

//   const driverDetails = {
//     // name: 'Ram Lal',
//     vehicle: 'Auto Rickshaw',
//     photo: 'https://www.shutterstock.com/image-photo/auto-rickshaw-driver-showing-thumbs-600nw-2114566913.jpg'
//   };

//   const handleEdit = () => {
//     navigate(-1); // Go back to the previous page
//   };

//   const handleCancel = () => {
//     console.log('Cancel Ride');
//   };

//   const handleViewRequests = () => {
//     try {
     
//       navigate('/ride-requests', { state: { drivername: rideDetails.drivername } });
//     } catch (error) {
//       console.error('Error fetching ride requests:', error);
//     }
//   };

//   return (
//     <div className="ride-confirmation">
//       <h2>Ride Confirmation</h2>
//       <div className="ride-summary">
//         <h3>Ride Summary</h3>
//         <p><strong>From:</strong> {rideDetails.leavingFrom}</p>
//         <p><strong>To:</strong> {rideDetails.goingTo}</p>
//         <p><strong>Date:</strong> {rideDetails.date}</p>
//         <p><strong>Seats Available:</strong> {rideDetails.availableSeats}</p>
//       </div>
//       <div className="driver-details">
//         <h3>Driver Details</h3>
//         <p><strong>Name:</strong> {rideDetails.drivername}</p>
//         <p><strong>Vehicle:</strong> {driverDetails.vehicle}</p>
//         {driverDetails.photo && <img src={driverDetails.photo} alt="Driver" />}
//       </div>
//       <div className="confirmation-message">
//         <p>Your ride has been posted!</p>
//       </div>
//       <div className="action-buttons">
//         <button onClick={handleEdit} className="edit-button">Edit Ride</button>
//         <button onClick={handleCancel} className="cancel-button">Cancel Ride</button>
//         <button onClick={handleViewRequests} className="view-requests-button">View Ride Requests</button>
//       </div>
//     </div>
//   );
// };

// export default RideConfirmation;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './RideConfirmation.css';

const RideConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rideDetails } = location.state;
  const [therapist, setTherapist] = useState(null);

  // const driverDetails = {
  //   vehicle: 'Auto Rickshaw',
  //   photo: 'https://www.shutterstock.com/image-photo/auto-rickshaw-driver-showing-thumbs-600nw-2114566913.jpg'
  // };

  // Fetch therapist details (or mock a therapist allocation for now)
  useEffect(() => {
    // Simulating fetching a therapist's details from an API or database
    const fetchTherapist = async () => {
      try {
        // Replace with real API call
        const therapists = [
          { name: 'Dr. Rahul Sharma', specialization: 'Specialist in treating Articulation Disorders' },
          { name: 'Dr. Smriti Khanna', specialization: 'Specialist in treating Language Disorders' },
          { name: 'Dr. Shruti Singh', specialization: 'Specialist in treating Fluency Disorders' },
          { name: 'Dr. Rahul Bajaj', specialization: 'Specialist in treating Dysphagia' },
          { name: 'Dr. Maria', specialization: 'Specialist in treating Cognitive Disorders' },
          { name: 'Dr. Uma Shankar', specialization: 'Specialist in treating Language Disorders' },
          { name: 'Dr. Yashwant Dubey', specialization: 'Specialist in treating Pediatric Speech Issues' },
          { name: 'Dr. Rohan Handa', specialization: 'Specialist in treating Cognitive Disorders' },
          { name: 'Dr. Preeti Gupta', specialization: 'Specialist in treating Fluency Disorders' }
        ];
        
        // Randomly assign a therapist (or fetch logic)
        const assignedTherapist = therapists[Math.floor(Math.random() * therapists.length)];
        setTherapist(assignedTherapist);
      } catch (error) {
        console.error('Error fetching therapist:', error);
      }
    };

    fetchTherapist();
  }, []);  // This will run once when the component mounts

  const handleEdit = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleCancel = () => {
    console.log('Cancel Ride');
  };

  const handleViewRequests = () => {
    try {
      navigate('/ride-requests', { state: { drivername: rideDetails.drivername } });
    } catch (error) {
      console.error('Error fetching ride requests:', error);
    }
  };

  return (
    <div className="ride-confirmation">
      <h2>Therapist Allocation</h2>
      <div className="ride-summary">
        <h3>Patient Summary</h3>
        <p><strong>Patient Name:</strong> {rideDetails.PatientName}</p>
        <p><strong>Contact No:</strong> {rideDetails.ContactNo}</p>
        <p><strong>Symptoms:</strong> {rideDetails.Symptoms}</p>
        <p><strong>Date:</strong> {rideDetails.Date}</p>
      </div>

      <div className="therapist-details">
        <h3>Therapist Details</h3>
        {therapist ? (
          <>
            <p><strong>Therapist Name:</strong> {therapist.name}</p>
            <p><strong>Specialization:</strong> {therapist.specialization}</p>
          </>
        ) : (
          <p>Loading therapist details...</p>
        )}
      </div>

      {/* <div className="driver-details">
        <h3>Driver Details</h3>
        <p><strong>Name:</strong> {rideDetails.drivername}</p>
        <p><strong>Vehicle:</strong> {driverDetails.vehicle}</p>
        {driverDetails.photo && <img src={driverDetails.photo} alt="Driver" />}
      </div> */}

      {/* <div className="confirmation-message">
        <p>Your ride has been posted!</p>
      </div> */}

      <div className="action-buttons">
        <button onClick={handleEdit} className="edit-button">Edit Schedule</button>
        <button onClick={handleCancel} className="cancel-button">Cancel Schedule</button>
        <button onClick={handleViewRequests} className="view-requests-button">View Other Therapist</button>
      </div>
    </div>
  );
};

export default RideConfirmation;
