import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const usePasswordMatchValidator = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return {
    password,
    confirmPassword,
    passwordsMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  };
};

const Instructors = () => {
  const {
    password,
    confirmPassword,
    passwordsMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
    } = usePasswordMatchValidator();
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

  return (
    <div>
      <input
        // type={showPassword ? "text" : "password"}
        {...register("password", {
          required: true,
          minLength: 6,
          maxLength: 20,
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
        })}
        placeholder="password"
        className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
      />
      {!passwordsMatch && <p>Passwords do not match.</p>}
    </div>
  );
};

export default Instructors;

