import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { logInUsingGoogle } = useAuth();
  document.title = "Log in";
  const location = useLocation();
  const history = useHistory();

  const redirectUri = location?.state?.from || "/";

  const handleUsingGoogle = () => {
    logInUsingGoogle().then((result) => {
      history.push(redirectUri);
    });
  };
  return (
    <div className="container mt-5" style={{ marginBottom: "500px" }}>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6">
          <div className=" text-center ">
            <button
              className="px-3 mb-5"
              onClick={handleUsingGoogle}
              style={{
                borderRadius: "20px",
                border: "2px solid blue",
              }}
            >
              <img
                src="https://i.ibb.co/y5bnkyg/png-transparent-google-logo-google-search-meng-meng-company-text-logo-removebg-preview.png"
                alt=""
                className="img-fluid "
                style={{ width: "50px" }}
              />{" "}
              Login with Google
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/ZmyzLJh/undraw-Mobile-login-re-9ntv.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

// <div className="center ">
//   <div className="card1">
//     <button
//       className="px-3"
//       onClick={handleUsingGoogle}
//       style={{ border: "none", borderRadius: "20px" }}
//     >
//       <img
//         src="https://i.ibb.co/y5bnkyg/png-transparent-google-logo-google-search-meng-meng-company-text-logo-removebg-preview.png"
//         alt=""
//         className="img-fluid "
//         style={{ width: "50px" }}
//       />{" "}
//       Login with google
//     </button>
//   </div>
// </div>
