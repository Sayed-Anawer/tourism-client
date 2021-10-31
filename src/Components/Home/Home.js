import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import TourOperator from "../TourOperator/TourOperator";
import { SpinnerCircular } from "spinners-react";
const Home = () => {
  const [allTours, setAllTours] = useState([]);
  document.title = "Tours Club";

  // Here set allTours as dependencies for deleting trips from the database it will instant update to the ui
  useEffect(() => {
    axios
      .get("https://enigmatic-taiga-44069.herokuapp.com/allTours")

      .then((res) => setAllTours(res.data));
  }, [allTours]);

  if (allTours.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <SpinnerCircular
          size={90}
          thickness={149}
          speed={107}
          color="rgba(57, 106, 172, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  } else {
    return (
      <div style={{ marginBottom: "300px" }}>
        <Banner />
        <div className="container my-5">
          <h2 className="my-3">
            Most <span className="text-danger"> Popular</span> Places
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {allTours.map((tour) => {
              return (
                <div className="col " key={tour._id}>
                  <div className="card h-100">
                    <img
                      src={tour.img_url}
                      className="card-img-top h-50"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4 className="card-title">{tour.name}</h4>
                      <h5 className="card-title my-4">Rs. {tour.price}</h5>
                      <p className="card-text">{tour.desc.substr(0, 220)}</p>
                    </div>
                    <div class="card-footer bg-primary">
                      <Link to={`/tourBook/${tour._id}`}>
                        <button className="w-100 btn btn-primary">
                          Book This Tour
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <About />
        <TourOperator />
        <Subscribe />
      </div>
    );
  }
};

export default Home;
