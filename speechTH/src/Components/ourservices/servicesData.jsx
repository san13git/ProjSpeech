// import scamimg from '../../assets/scamimg.avif'
// import discount from '../../assets/discount.jpg'
import ratings from '../../assets/ratings.jpg'
// import ridematch from '../../assets/ridematch.jpg'
// import bookride1 from '../../assets/bookride1.jpeg'
import pic1 from '../../assets/pic1.png'
import pic2h from '../../assets/pic2h.png'
import pic3h from '../../assets/pic3h.png'
import pic4h from '../../assets/pic4h.png'


const servicesData = [
    {
      id: 1,
      title: 'Automated Patient-Therapist Matching',
      description: 'Matches patients to therapists based on needs (e.g., type of disorder, age, language).',
      details: 'Ensures efficient case allocation to available therapists, reducing delays.',
      image: pic1, // Replace with actual image path
    },
    {
      id: 2,
      title: 'Therapy Planning and Documentation',
      description: 'Enables therapists to create therapy plans, set goals, and design activities tailored to each patient.',
      details: 'Stores therapy plans and session notes digitally for easy access and updates.Facilitates ongoing updates to therapy plans based on patient progress and feedback from supervisors.',
      image: pic2h, // Replace with actual image path
    },
    {
      id: 3,
      title: 'Supervisor Review and Feedback',
      description: 'Allows supervisors to review and approve therapy plans created by therapists.',
      details: 'Provides a feedback system for supervisors to suggest adjustments or improvements.Streamlines communication between therapists and supervisors, ensuring high-quality care.',
      image: pic3h, // Replace with actual image path
    },
    {
        id:4,
        title: 'Session Tracking and Progress Reporting',
        description : 'Tracks each therapy session and stores records automatically.',
        details: 'Generates reminders for therapists to submit progress reports after a set number of sessions.',
        image: pic4h,
    },
    {
        id:5,
        title: 'Clinical Ratings and Performance Evaluation',
        description : 'Enables supervisors to give clinical ratings and evaluations after each completed therapy case.',
        details: 'Tracks therapist performance over time, offering valuable feedback for student therapists.',
        image: ratings,
    }
    // Add more services as needed
  ];
  
  export default servicesData;
  