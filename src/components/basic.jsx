import React from 'react';

const Basic = () => {
  const name = "John";
  const age = 20;
  const city = "New York";
  const country = "USA";
  const email = "john@gmail.com";
  const phone = "1234567890";
  const address = "123 Main St, New York, NY 10001";

  const arr = ["vijay", "kumar", "singh", "raj", "kumar", "vijaytaaa", "vijaijijaji", "vijaytaaa", "vijaijijaji", "vijaytaaa", "vijaijijaji"];
  const namesStartingWithVij = arr.filter((item) => item.startsWith("vij"));

  return (
    <div>
      <h1>Basic</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>Names Starting With Vij: {namesStartingWithVij}</p>
    </div>
  );
};

export default Basic;