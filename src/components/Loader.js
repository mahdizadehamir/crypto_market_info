import React from "react";
import spinner from "../assets/gif/spinner2.gif";
const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loader" />
      <h2>Loading ...</h2>
    </div>
  );
};

export default Loader;
