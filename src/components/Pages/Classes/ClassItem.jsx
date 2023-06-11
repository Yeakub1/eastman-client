import React from 'react';

const ClassItem = ({ item }) => {
    const { name, price, email, image, seats, classNames } = item;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <img
              src={image}
              className="w-full h-[250px]"
              draggable={false}
              alt="class image"
            />
          </div>

          <div className="p-5">
            <h1 className="card-title mb-5">{classNames}</h1>
            <h2 className="card-title">
              Instructors <span className=" text-secondary">{name}</span>
            </h2>
            <div className="flex gap-10">
              <p>Price$ {price}</p>
              <p>Seats {seats}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Select</div>
              <div className="badge badge-outline">pay</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClassItem;