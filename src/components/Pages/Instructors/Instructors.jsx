import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DetailsInst from './DetailsInst';

const Instructors = () => {
  const [inst, setInst] = useState([]);
  useEffect(() => {
    fetch("https://eastman-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInst(data));
  },[])
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Esatman School | Instructors</title>
      </Helmet>
      <h1 className="text-center text-3xl m-5 font-bold">Instructors</h1>
      <div className="grid justify-center lg:grid-cols-3 gap-5">
        {inst.map((instructor) => (
          <DetailsInst
            key={instructor._id}
            instructor={instructor}
          ></DetailsInst>
        ))}
      </div>
    </div>
  );
};

export default Instructors;