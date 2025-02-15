



// PublishRide.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PublishRide.css'; 
// import axios from 'axios'


// function PublishRide() {
//   const navigate = useNavigate();
//   const [PatientName, setPatientName] = useState('');
//   const [ContactNo, setContactNo] = useState('');
//   const [Symptoms, setSymptoms] = useState('');
//   const [Date,setDate]=useState('');
//   const [drivername,setdname]=useState('')
//   const [saveDetails, setSaveDetails] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');


//   const handleNameChange = (e) => {   //axios
//     setPatientName(e.target.value);
//   };
//   const handleContactChange = (e) => {
//     setContactNo(e.target.value);
//   };
//   const handleSymptomsChange = (e) => {
//     setSymptoms(e.target.value);
//   };
//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };
//   const handledname=(e)=>{
//     setdname(e.target.value);

//   }

//   const handleSubmit = async (e) => {
    

//     e.preventDefault();
   
//     try {
//       const response = await axios.post('http://localhost:3000/api/v1/ride/add', {
//         PatientName,
//         ContactNo,
//         Symptoms,
//         Date,
//         // drivername
//       });
//       setSuccessMessage(response.data.message);
//       alert('Succesfully registered')
//       navigate('/ride-confirmation', { state: { rideDetails: { PatientName, ContactNo, Symptoms, Date } } });
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.message || 'An error occurred');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="main-div" style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/delhi-auto-rickshaw-600nw-1043266300.jpg')`, backgroundSize: '50%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' ,margin: 0,
//     padding: 0}}>
    
//     <div className="search-cons"> 
//       <h2 className="des">Enter your Details</h2>
//       <br/>
//       {/* <form onSubmit={handleSubmit} /> */}


//       <div className="card1" onChange={handledname}> 
//         <label htmlFor="drivername">Patient Name</label>
//         <input
//           type="text"
//           id="drivername"
//           value={drivername}
//           onChange={(e) => setdname(e.target.value)}
//           className="publish-input" 
//         />
//         </div>
//       <div className="card1" onChange={handleContactChange}> 
//         <label htmlFor="source">Contact No.</label>
//         <input
//           type="text"
//           id="source"
//           value={ContactNo}
//           onChange={(e) => setContactNo(e.target.value)}
//           className="publish-input" 
//         />
//       </div>
//       <div className="card1"> 
//         <label htmlFor="destination" onChange={handleSymptomsChange}>Symptoms</label>
//         <input
//           type="text"
//           id="destination"
//           value={Symptoms}
//           onChange={(e) => setSymptoms(e.target.value)}
//           className="publish-input" 
//         />
//         </div>

// <div className="card1" onChange={handleDateChange}> 
//         <label htmlFor="date">Appointment Date</label>
//         <input
//           type="date"
//           id="dateshow"
//           value={Date}
//           onChange={(e) => setDate(e.target.value)}
//           className="publish-input" 
//         />
//       </div>
//       {/* <div className="card1" onChange={handlePassengerChange}> 
//         <label htmlFor="passengers">Emergency</label>
//         <input
//           type="boolean"
//           id="passengers"
//           value={availableSeats}
//           onChange={(e) => setPassengers(e.target.value)}
//           className="publish-input" 
//         />
//       </div> */}
      
//       <button onClick={handleSubmit} className="publish-button">Raise a Query</button> 
       
//     </div>
   
//     </div>
//   );
// }

// export default PublishRide;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PublishRide.css'; 
import axios from 'axios';
import lipspeech from '../assets/lipspeech.jpg'

function PublishRide() {
  const navigate = useNavigate();
  const [PatientName, setPatientName] = useState('');
  const [ContactNo, setContactNo] = useState('');
  const [Symptoms, setSymptoms] = useState('');
  const [Date, setDate] = useState('');
  const [drivername, setdname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setPatientName(e.target.value);
  };
  const handleContactChange = (e) => {
    setContactNo(e.target.value);
  };
  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/ride/add', {
        PatientName,
        ContactNo,
        Symptoms,
        Date
      });

      setSuccessMessage(response.data.message);
      alert('Successfully registered');
      navigate('/ride-confirmation', { state: { rideDetails: { PatientName, ContactNo, Symptoms, Date } } });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred');
      setSuccessMessage('');
    }
  };

  return (
    <div className="main-div" style={{ backgroundImage: `url(${lipspeech})`, backgroundSize: '50%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', margin: 0, padding: 0 }}>
      <div className="search-cons"> 
        <h2 className="des">Enter your Details</h2>
        <br/>
        {/* Wrap your input fields and button inside the form */}
        <form onSubmit={handleSubmit}> 
          <div className="card1">
            <label htmlFor="drivername">Patient Name</label>
            <input
              type="text"
              id="drivername"
              value={PatientName}
              onChange={handleNameChange}
              className="publish-input"
            />
          </div>

          <div className="card1">
            <label htmlFor="contactNo">Contact No.</label>
            <input
              type="text"
              id="contactNo"
              value={ContactNo}
              onChange={handleContactChange}
              className="publish-input"
            />
          </div>

          <div className="card1">
            <label htmlFor="symptoms">Symptoms</label>
            <input
              type="text"
              id="symptoms"
              value={Symptoms}
              onChange={handleSymptomsChange}
              className="publish-input"
            />
          </div>

          <div className="card1">
            <label htmlFor="date">Appointment Date</label>
            <input
              type="date"
              id="date"
              value={Date}
              onChange={handleDateChange}
              className="publish-input"
            />
          </div>

          <button type="submit" className="publish-button">Raise a Query</button> 
        </form>
      </div>
    </div>
  );
}

export default PublishRide;
