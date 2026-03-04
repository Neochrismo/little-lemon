import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    location: "indoor",
    tables: 1,
    phone: "",//Optional phone number field
    occasion: "birthday",//Default occasion
    otherOccasion: "",//Optional field for other occasions
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Table Reserved:", formData);
        alert("Check your email for confirmation!");
      }
    };
    return (
      <form onSubmit={handleSubmit} className="booking">
        <h2>Reserve a Table</h2>
        <div className="form-group">
          <label htmlFor="first-name">FirstName:</label>
          <input type="text" id="first-name" name="name" placeholder="first name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
            <label htmlFor="middle-name">Middle Name:</label>
            <input type="text" id="middle-name" name="middleName" placeholder="middle name" value={formData.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="lastName" placeholder="last name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number (Optional):</label>
            <input type="tel" id="phone" name="phone" placeholder="phone number" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
            {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} />
            {errors.guests && <span className="error">{errors.guests}</span>}
        </div>
        <div className="form-group">
            <label htmlFor="location">Location:</label>
            <select id="location" name="location" value={formData.location} onChange={handleChange}>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="tables">Number of Tables:</label>
            <input type="number" id="tables" name="tables" min="1" value={formData.tables} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="other">Other</option>
            </select>
            {formData.occasion === "other" && (
                <input type="text" id="other-occasion" name="otherOccasion" placeholder="Please specify your occasion"
                value={formData.otherOccasion} onChange={handleChange} />
            )}
        </div>
        <button type="submit">Reserve Table</button>
      </form>
    );
  };

export default BookingForm;