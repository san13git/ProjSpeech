// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './RideRequests.css';

// const RideRequests = () => {
//   const location = useLocation();
//   const { drivername } = location.state;
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Replace with the actual API call to fetch ride requests
//     fetchRideRequests(drivername);
//   }, [drivername]);

//   const fetchRideRequests = (drivername) => {
//     // Mock API call
//     const mockRequests = [
//       { id: 1, passengerName: 'John Doe', status: 'Pending' },
//       { id: 2, passengerName: 'Jane Smith', status: 'Confirmed' }
//     ];
//     setRequests(mockRequests);
//   };

//   return (
//     <div className="ride-requests">
//       <h2>Ride Requests for {drivername}</h2>
//       <ul>
//         {requests.map(request => (
//           <li key={request.id}>
//             <p><strong>Passenger Name:</strong> {request.passengerName}</p>
//             <p><strong>Status:</strong> {request.status}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RideRequests;

// import React from 'react';
// import './RideRequests.css';

// const RideRequests = () => {
//   const therapists = [
//     { name: 'Dr. Rahul Sharma', specialization: 'Specialist in treating Articulation Disorders' },
//     { name: 'Dr. Smriti Khanna', specialization: 'Specialist in treating Language Disorders' },
//     { name: 'Dr. Shruti Singh', specialization: 'Specialist in treating Fluency Disorders' },
//     { name: 'Dr. Rahul Bajaj', specialization: 'Specialist in treating Dysphagia' },
//     { name: 'Dr. Maria', specialization: 'Specialist in treating Cognitive Disorders' },
//     { name: 'Dr. Uma Shankar', specialization: 'Specialist in treating Language Disorders' },
//     { name: 'Dr. Yashwant Dubey', specialization: 'Specialist in treating Pediatric Speech Issues' },
//     { name: 'Dr. Rohan Handa', specialization: 'Specialist in treating Cognitive Disorders' },
//     { name: 'Dr. Preeti Gupta', specialization: 'Specialist in treating Fluency Disorders' }
//   ];

//   return (
//     <div className="therapists-list">
//       <h3>Available Therapists</h3>
//       <ul>
//         {therapists.map((therapist, index) => (
//           <li key={index} className="therapist-card">
//             <p><strong>Name:</strong> {therapist.name}</p>
//             <p><strong>Specialization:</strong> {therapist.specialization}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RideRequests;

import React from 'react';
import './RideRequests.css';

const RideRequests = () => {
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

  return (
    <div className="therapists-list">
      <h3>Available Therapists</h3>
      {therapists.map((therapist, index) => (
        <div key={index} className="therapist-card">
          <p><strong>Name:</strong> {therapist.name}</p>
          <p><strong>Specialization:</strong> {therapist.specialization}</p>
        </div>
      ))}
    </div>
  );
};

export default RideRequests;
