import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddMoreTrips = () => {
  const { register, handleSubmit, reset } = useForm();
  document.title = "Add More Trips";
  const onSubmit = (data) => {
    axios
      .post("https://enigmatic-taiga-44069.herokuapp.com/addMoreTrips", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire(
            "Trip Added",
            "Your new Trip is Added to the home page ",
            "success"
          );
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

        <input
          className="btn btn-primary btn-lg"
          type="submit"
          value="Add Trip"
        />
      </form>
    </div>
  );
};

export default AddMoreTrips;
