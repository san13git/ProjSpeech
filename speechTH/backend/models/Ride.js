// backend/models/Ride.js

const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  PatientName: {
        type: String,
        required: true
    },
    ContactNo: {
        type: String,
        required: true
    },
   Symptoms: {
        type: String,
        
        required: true
    },
  // driver: {
  //   // type: mongoose.Schema.Types.ObjectId,
  //   type: String,
  //   ref: 'User',
  //   required: true
  // },

  
  Date: {
    type: String,
    required: true
  },
  // drivername:{
  //   type:String,
  //   required:true
  // }
  

  
  
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
