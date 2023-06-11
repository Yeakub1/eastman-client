import React from 'react';

const MyClassDetails = ({ music }) => {
  const { _id, image, title, selleremail, price, rating } = music;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{selleremail}</td>
      <td>{rating}</td>
      <td>{price}</td>
      <td onClick={() => handleUpdate(_id)}>
        {/* <FaEdit /> */} edit
      </td>
      <td onClick={() => handleDelete(_id)}>
        {/* <FaTrashAlt /> */} delete
      </td>
    </tr>
  );
};

export default MyClassDetails;