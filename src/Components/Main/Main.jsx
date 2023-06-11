import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="containers">
      <div className="heading">
        <h1>My name is Avijit</h1>
      </div>
      <div className="para">
        <p>I am Frontend Developer </p>
        <a className="btns" href="/public/Avijit Dam Cv __ (1).pdf" target="_blank" rel="noopener noreferrer">Hire Me</a>
      </div>
      <div className="stack">
        <button className="stacks">Javascript</button>
        <button className="stacks">React Js</button>
        <button className="stacks">HTML</button>
        <button className="stacks">CSS</button>
      </div>

      <div className="left">
        <img src="/public/Avijitdam.jpg" alt="" />
      </div>
    </div>
  );
};

export default Main;
