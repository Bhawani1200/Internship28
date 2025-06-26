import { Button } from "@mui/material";
import React from "react";
import {  useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate=useNavigate();
  const handleSubmit = (e) => {


    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("UserData:", userData);
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
              htmlFor="firstName"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="lastName"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

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
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
          </span>
          <Button onClick={()=>navigate("/login")} className="text-blue-500 hover:text-blue-600">
            Login
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default RegisterForm;
