import React from "react";
import "./FromStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Deatils</label>
        <input type="text"></input>
        <textarea rows="6" placeholder="Type s short message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
