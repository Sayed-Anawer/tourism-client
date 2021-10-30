import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="not-found text-center" style={{ marginBottom: "290px" }}>
      <img
        src="https://i.ibb.co/cwx8f9c/undraw-page-not-found-su7k.png"
        className="img-fluid"
        alt=""
      />
      <div>
        <button className="btn btn-dark " onClick={handleClick}>
          Go to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
