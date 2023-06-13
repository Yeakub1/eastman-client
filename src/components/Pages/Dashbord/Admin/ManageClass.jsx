import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const token = localStorage.getItem("access-token");

const ManageClass = () => {

  const handleMakeAdmin = (item) => {
    fetch(`http://localhost:5000/user/admin/${item._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} in an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/class", {
      headers: {
        authorization: `beraer ${token}`,
      },
    });
    return res.json();
  });
  return (
    <div className="w-full px-10">
      <div>
        <h2>
          Total Class:{" "}
          <span className="text-red-600 font-bold">{users.length}</span>
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>ROLE</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="class imges" />
                      </div>
                    </div>
                  </td>
                  <td>{item.classNames}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.seats}</td>
                  <td>{item.price}</td>
                  <td>
                    {item.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="btn btn-ghost bg-orange-600  text-white"
                      >
                        <FaUserAlt />
                      </button>
                    )}
                  </td>
                  <td>
                    <select className="select select-success ">
                      <option disabled selected>
                        Status
                      </option>
                      <option>pending </option>
                      <option>approved</option>
                      <option>denied</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
