import React from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import {  login } from "../../State/Auth/Action";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log("userData", userData);
  };

  return (
    <div>
      <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <form
          action="#"
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="email"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="password"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            If you don't have an account{" "}
          </span>
          <Button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:text-blue-600"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
