import React from "react";
import '../../scss/styles.css';


const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center custom-heading-light">{heading}</h2>
      <p className="lead text-center pb-3 custom-message">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
