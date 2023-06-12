import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const token = localStorage.getItem("access-token");

const ManageClass = () => {
  const handleDeleteItems = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${item._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <td>{item.name}</td>
                      </div>
                    </div>
                  </td>
                  <td>{item.classNames}</td>
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
                  <td
                    onClick={() => handleDeleteItems(item)}
                    className="text-orange-600  "
                  >
                    <FaTrash />
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
