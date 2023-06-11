import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const ContactFrom = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const {user}= useContext(AuthContext)
    
  const onSubmit = (data) => console.log(data);

  return (
    <div className="lg:px-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-slate-300"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor name</span>
            </label>

            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
            {errors.name && (
              <span className="text-red-800">Instructor Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>

            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-800">Class Image is required</span>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor email</span>
          </label>

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
            defaultValue={user?.email}
          />
          {errors.email && (
            <span className="text-red-800">Instructor email is required</span>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>

            <input
              type="number"
              {...register("seats", { required: true })}
              placeholder="seats"
              className="input input-bordered"
            />
            {errors.seats && (
              <span className="text-red-800">seats is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>

            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="price"
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-red-800">Price is required</span>
            )}
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
