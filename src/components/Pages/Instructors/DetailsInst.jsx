import React from "react";

const DetailsInst = ({ instructor }) => {
  const { _id, name, Email, picture } = instructor;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="instructor" className="w-full h-[350px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{Email}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsInst;
