import React, { useState } from "react";
import axios from "axios";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone_number: "",
    rating: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.address ||
      !formData.phone_number ||
      !formData.rating
    ) {
      setErrorMessage("please fill in all fields.");
      return;
    }

    if (isNaN(formData.rating)(formData.rating < 1 || formData.rating > 5)) {
      setErrorMessage("rate 1 to 5");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/listview/",
        formData
      ); 
      setSuccessMessage("Restaurant added successfull");
      setFormData({
        name: "",
        address: "",
        phone_number: "",
        rating: "",
      });
    } catch (error) {
      setErrorMessage("error adding restaurant" + error.message);
    }
  };

  return (
    <div>
      <h2>Add a New Restaurant</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default RestaurantForm;
