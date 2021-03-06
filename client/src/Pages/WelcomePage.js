import React from "react";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1>Welcome to this Blog</h1>
      <p>A full stack MERN demo</p>
      <button
        onClick={() => history.push("/home")}
        className="btn btn-outline-primary"
      >
        Go to Blog
      </button>
    </div>
  );
};

export default WelcomePage;
