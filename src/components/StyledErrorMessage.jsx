import React from "react";
import { ErrorMessage } from "formik";

const StyledErrorMessage = ({ name }) => {
  return (
    <div className="text-red-600 font-medium italic">
      <ErrorMessage name={name} />
    </div>
  );
};

export default StyledErrorMessage;
