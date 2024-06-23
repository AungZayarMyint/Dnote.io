import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StyledErrorMessage from "./StyledErrorMessage";

const NoteFormSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title is too short!")
    .max(30, "Title is too long bby!")
    .required("Enter a title!"),
  content: Yup.string()
    .min(5, "Content is too short bby!")
    .required("Enter a Content!"),
});

const submitHandler = (values) => {
  console.log(values);
};

const NoteForm = ({ isCreate }) => {
  const initialValues = {
    title: "",
    content: "",
  };

  return (
    <section>
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
