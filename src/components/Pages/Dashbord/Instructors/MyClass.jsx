import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyClassDetails from './MyClassDetails';

const MyClass = () => {
 const { user } = useContext(AuthContext);
 const [Myclass, setMyClass] = useState([]);

 useEffect(() => {
   fetch(`http://localhost:5000/class/${user?.email}`)
     .then((res) => res.json())
     .then((data) => {
       setMyClass(data)
     });
 }, [user]);

    return (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title </th>
              <th>Email</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Myclass.map((music) => (
              <MyClassDetails
                key={music._id}
                music={music}
                // handleDelete={handleDelete}
              ></MyClassDetails>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyClass;