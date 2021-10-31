import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllEvents = () => {
  const [manageAllUsers, setManageAllUsers] = useState([]);
  const [status, setStatus] = useState(false);
  document.title = "Manage All Trips";
  useEffect(() => {
    setStatus(false);
    axios
      .get("https://enigmatic-taiga-44069.herokuapp.com/manageAllUsers")
      .then((res) => setManageAllUsers(res.data));
  }, [status]);

  // Delete User trip booking
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this data !",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: " #d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://enigmatic-taiga-44069.herokuapp.com/deleteUsersTrip/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = manageAllUsers.filter(
                (tour) => tour._id !== id
              );
              setManageAllUsers(remaining);
            }
          });
        Swal.fire("Deleted!", "User trip booking has been deleted.", "success");
      }
    });
  };

  // Update User trip booking Status
  const handleEditStatus = (id) => {
    axios
      .put(`https://enigmatic-taiga-44069.herokuapp.com/updateStatus/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire(
            "Updated",
            "User Trip Booking status has been Approved",
            "success"
          );
          setStatus(true);
        }
      });
  };

  if (!manageAllUsers) {
    return (
      <div
        className=" spinner-border text-primary text-center"
        role="status"
      ></div>
    );
  } else if (manageAllUsers.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "380px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/277JQj1/nos-removebg-preview-1.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Trip Found !</h2>
      </div>
    );
  } else {
    return (
      <div
        style={{ marginBottom: "500px" }}
        className="container table-responsive "
      >
        <h1 className="text-center">Manage All Trips</h1>
        <table className="table caption-top mt-3">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Address</th>
              <th scope="col">Trip</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">
                Edit
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {manageAllUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.date}</td>
                  <td>{user.address}</td>
                  <td>{user.name}</td>
                  <td>
                    <span className="fs-5">{user.status}</span>
                  </td>
                  <td>
                    {" "}
                    <i
                      className="btn btn-primary mx-4 bi bi-check2-square"
                      onClick={() => handleEditStatus(user._id)}
                    >
                      {" "}
                      Approve
                    </i>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ManageAllEvents;
