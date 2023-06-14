import React, { useEffect, useState } from 'react';
import ClassItem from './ClassItem';

const Classes = () => {

    const [allcalss, setClass] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/class")
            .then(res => res.json())
            .then(data => setClass(data));
    }, []);
  
  const handleMolda = (id) => {
    console.log(id);
  }

    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl m-5 font-bold">
          Recent Posts Class
        </h1>
        <div className="grid justify-center lg:grid-cols-3 ">
          {allcalss.map((item) => (
            <ClassItem
              key={item._id}
              item={item}
              handleMolda={handleMolda}
            ></ClassItem>
          ))}
        </div>
      </div>
    );
};

export default Classes;