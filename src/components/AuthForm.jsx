import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StyledErrorMessage from "./StyledErrorMessage";

const AuthForm = ({ isLogin }) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const AuthFormSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username is too short!")
      .max(30, "Username is too long!")
      .required("Username is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Enter a valid email address!"),
    password: Yup.string()
      .min(4, "Password must have at least 4 characters!")
      .required("Password is required!"),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={AuthFormSchema}
    >
      {() => (
        <Form className="w-1/2 mx-auto">
          <h1 className="text-center font-bold text-3xl my-4 text-teal-600">
            {isLogin ? "Login" : "Register"}
          </h1>
          <div className="mb-3">
            <label htmlFor="username" className=" font-medium block">
              Username
            </label>
            <Field
              type="text"
              name="username"
              id="username"
              className=" text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
            />
            <StyledErrorMessage name="username" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className=" font-medium block">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className=" text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
            />
            <StyledErrorMessage name="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className=" font-medium block">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className=" text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
            />
            <StyledErrorMessage name="password" />
          </div>

          <button
            className="text-white bg-teal-600 py-3 font-medium w-full text-center rounded-lg"
            type="submit"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
