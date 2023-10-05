import React, { useState } from 'react';

function MyForm() {
  // Step 2: Set up state variables to store user input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as needed
  });

  // Step 4: Handle changes in input fields and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 6: Local function to handle data and make API request
  const handleSubmit = () => {
    // Gather data from formData and make your API request here
    console.log('Sending data to API:', formData);

    // Reset the form or perform other actions as needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      // Reset other fields as well
    });
  };

  return (
    <div>
      <h2>My Form</h2>
      <form>
        {/* Step 3: Create input fields */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {/* Add more input fields as needed */}
      </form>
      {/* Step 5: Create a button to trigger the local function */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyForm;