import React, { useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StyledErrorMessage from "./StyledErrorMessage";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteFormSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title is too short!")
    .max(30, "Title is too long bby!")
    .required("Enter a title!"),
  content: Yup.string()
    .min(5, "Content is too short bby!")
    .required("Enter a Content!"),
});

const NoteForm = ({ isCreate }) => {
  const [redirect, setRedirect] = useState(false);
  const initialValues = {
    title: "",
    content: "",
  };

  const submitHandler = async (values) => {
    if (isCreate) {
      const response = await fetch(`${import.meta.env.VITE_API}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 201) {
        setRedirect(true);
      } else {
        toast.warn("🦄 Something Went Wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-5">
          {isCreate ? "Create a new note.." : "Edit your note here..."}
        </h1>
        <Link to={"/"}>
          <ArrowUturnLeftIcon width={25} height={25} />
        </Link>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={NoteFormSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="font-medium block">
                Note Title
              </label>
              <Field
                type="text"
                name="title"
                id="title"
                className="text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
              />
              <StyledErrorMessage name="title" />
            </div>

            <div className="">
              <label htmlFor="content" className="font-medium block">
                Note Content
              </label>
              <Field
                as="textarea"
                rows={5}
                type="text"
                name="content"
                id="content"
                className="text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
              />
            </div>
            <button
              className="text-white bg-teal-600 py-3 font-medium w-full text-center rounded-lg"
              type="submit"
            >
              Save Note
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NoteForm;
