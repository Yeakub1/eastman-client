import React, { useEffect, useState } from "react";
import ClassItems from "./ClassItems";

const PopulerClass = () => {
  const [allcalss, setClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => setClass(data));
  }, []);

  const handleMolda = (id) => {
    console.log(id);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl mt-20 mb-16 font-bold">
        <span className="text-[#EF43CF]">Popular</span> Class
      </h1>
      <div className="grid justify-center lg:grid-cols-3 gap-5">
        {allcalss.map((item) => (
          <ClassItems
            key={item._id}
            item={item}
            handleMolda={handleMolda}
          ></ClassItems>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
