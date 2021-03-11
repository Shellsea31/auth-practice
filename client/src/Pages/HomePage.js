import React from "react";

const HomePage = (props) => {
  return (
    <div className="container">
      {props.blogs.map((blog) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
