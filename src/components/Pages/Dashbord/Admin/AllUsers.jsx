import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const token = localStorage.getItem("access-token");

const AllUsers = () => {
 

  const handleMakeAdmin = (item) => {
    fetch(`http://localhost:5000/users/admin/${item._id}`, {
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

  const handleMakeInstructor = (item) => {
    fetch(`http://localhost:5000/users/instructor/${item._id}`, {
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
            title: `${item.name} in an Instructor Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users", {
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
          Total User:{" "}
          <span className="text-red-600 font-bold">{users.length}</span>
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE Admin</th>
                <th>ROLE Instructor</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
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
                    {item.role === "instructor" ? (
                      "instructor"
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(item)}
                        className="btn btn-ghost bg-primary  text-white"
                      >
                        <FaUserAlt />
                      </button>
                    )}
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

export default AllUsers;
