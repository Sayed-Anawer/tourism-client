import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const PlaceTrip = () => {
  const [details, setDetails] = useState([]);
  const history = useHistory();
  document.title = "Register For Trip";
  //   const [registerEvent, setRegisterEvent] = useState({});
  const { tourId } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("https://enigmatic-taiga-44069.herokuapp.com/allTours")

      .then((res) => setDetails(res.data));
  }, []);

  const newData = details.find((datas) => datas._id === tourId);
  console.log(newData);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.img_url = newData?.img_url;
    data.status = "Pending";
    axios
      .post("https://enigmatic-taiga-44069.herokuapp.com/userEventData", data)
      .then((res) => {
        if (res.data.acknowledged) {
          alert("data Inserted");
          history.push("/myEvents");
          reset();
        }
      });
  };

  if (!newData) {
    return (
      <div>
        <h2 className="text-center">Loading....</h2>
      </div>
    );
  } else {
    return (
      <div className="container mt-5" style={{ marginBottom: "350px" }}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <div>
              <img
                style={{ border: "3px dashed black" }}
                src={newData.img_url}
                className="img-fluid w-50 ms-4 mb-4 p-1"
                alt=""
              />
            </div>
            <h3>Description of {newData.name.substr(8)}</h3>
            <p> {newData?.desc} </p>
            <h3>Cancellation policy</h3>
            <ul>
              <li>
                50% of the total amount will be deducted if cancellation
                notified 7 days prior to the trip
              </li>
              <li>
                75% of the total amount will be deducted if cancellation
                notified 4 days prior to the trip
              </li>
              <li>
                100% of the total amount will be deducted if cancellation
                notified within the last 3 days prior to the trip unless the
                trip is canceled by the management
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="container  ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label forhtml="exampleInputName" className="form-label">
                    Name
                  </label>
                  <input
                    id="exampleInputName"
                    className="form-control"
                    defaultValue={user?.displayName}
                    {...register("userName")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    defaultValue={user?.email}
                    {...register("userEmail")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputTourName" className="form-label">
                    Tour Name
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputTourName"
                    defaultValue={newData?.name}
                    {...register("name")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputTourPrice" className="form-label">
                    Price
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputTourPrice"
                    defaultValue={newData?.price}
                    {...register("price")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputDate" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputDate"
                    {...register("date")}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleInputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputAddress"
                    {...register("address")}
                  />
                </div>

                <input
                  className="btn btn-success"
                  type="submit"
                  value="Place Trip"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PlaceTrip;
