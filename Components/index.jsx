import "./TalentForm.css";
import React, { useState, useEffect } from "react";
import videoFile from "../3191572-uhd_3840_2160_25fps.mp4"; 

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    profession: "",
    timeIn: "", // Add timeIn state
  });

  useEffect(() => {
    // Function to get the current time
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString(); // Get the current time
      setFormData((prevFormData) => ({
        ...prevFormData,
        timeIn: currentTime,
      }));
    };

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timeInterval);
  }, []); // Empty dependency array means this effect runs only once when the component is mounted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.profession) {
      alert("Please select a talent before submitting!");
      return;
    }

    console.log("Form Data Submitted: ", formData);

    // Here you can send `formData` to the backend, including the current timeIn value

    setFormData({
      name: "",
      age: "",
      email: "",
      profession: "",
      timeIn: "", // Reset the timeIn state
    });
  };

  return (
    <div>
      <div className="video-container">
        <video className="video" src={videoFile} autoPlay loop muted></video>
      </div>

      <div className="form-container">
        <div className="form-card">
          <h1>TIMECARE</h1>
          <p>Fill out all the details below</p>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="profession">Profession</label>
              <select
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              >
                <option value="">Select your profession</option>
                <option value="Physician">Physician</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Radiologist">Radiologist</option>
                <option value="Optometrist">Optometrist</option>
                <option value="Therapist">Therapist</option>
              </select>
            </div>

            <div className="form-field">
              <p>Current Time In: {formData.timeIn}</p>
            </div>

            <button type="submit" className="Submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalentForm;
