import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useSecure from '../../../Hooks/useSecure';

const MyClass = () => {
 const { user } = useContext(AuthContext);
  const [Myclass, setMyClass] = useState([]);
  const [, refetch] = useSecure();

 useEffect(() => {
   fetch(`https://eastman-server.vercel.app/class/${user?.email}`)
     .then((res) => res.json())
     .then((data) => {
       setMyClass(data);
     });
 }, [user]);
  

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
         fetch(`https://eastman-server.vercel.app/class/${item._id}`, {
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

  return (
    <div className="w-full px-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title </th>
              <th>Email</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Myclass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <td>{item.name}</td>
                    </div>
                  </div>
                </td>

                <td>{item.email}</td>
                <td>{item.price}</td>
                <td onClick={() => handleUpdate(_id)}>
                  <FaEdit />
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
  );
};

export default MyClass;