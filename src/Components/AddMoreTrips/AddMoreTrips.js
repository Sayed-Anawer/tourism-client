import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddMoreTrips = () => {
  const { register, handleSubmit, reset } = useForm();
  document.title = "Add More Trips";
  const onSubmit = (data) => {
    axios
      .post("https://enigmatic-taiga-44069.herokuapp.com/addMoreTrips", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Trip Added");
          reset();
        }
      });
  };
  return (
    <div className="container mt-5" style={{ marginBottom: "500px" }}>
      <h1 className="text-center">Add more Trips</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label forhtml="exampleInputTripName" className="form-label">
            Tour Name
          </label>
          <input
            className="form-control"
            id="exampleInputTripName"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputTripPrice" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            id="exampleInputTripPrice"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputDesc" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="exampleInputDesc"
            {...register("desc")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputImg" className="form-label">
            Image Url
          </label>
          <input
            className="form-control"
            id="exampleInputImg"
            {...register("img_url")}
          />
        </div>

        <input className="btn btn-primary" type="submit" value="Add Trip" />
      </form>
    </div>
  );
};

export default AddMoreTrips;
