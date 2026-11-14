import "./App.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("data", data);
    // reset();
  };
  const existingUsername = ["admin", "user", "john"];
  const checkIfUsernameExists = async (username) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existingUsername.includes(username);
  };
  // console.log(watch("name"));
  return (
    <div className="div">
      <h2>Forms in React </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: "Name is required!",
              validate: {
                checkUsername: async (value) => {
                  const exist = await checkIfUsernameExists(value);
                  return !exist || "Username already taken!";
                },
              },
              minLength: {
                value: 2,
                message: "Name must have atleast 2 chars!",
              },
            })}
          />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>
          Email:
          <input
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            })}
          />
        </label>
        {errors.email && <p>Invalid email format.</p>}

        <br />
        <label>
          Password:
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 2,
            })}
          />
        </label>
        {errors.password && <p>Password must be atleast 2 chars.</p>}

        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              minLength: 2,
              validate: (value) =>
                value === watch("password") || "Password do not match",
            })}
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <br />

        <button type="submit"> Submit</button>
        <button type="button" onClick={() => reset()}>
          {" "}
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
