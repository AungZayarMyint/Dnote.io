import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <section className="px-10 mt-10">
      <div className="text-right">
        <Link
          to={"/"}
          className="text-teal-600 font-medium border border-teal-600 px-2 py-2 rounded-md"
        >
          Back
        </Link>
      </div>
      <div className="border-t-4 border-t-teal-600 shadow-lg p-3 mt-4">
        <h3 className="text-3xl font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-md mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque
          vel quia delectus officia sapiente adipisci, harum excepturi est
          eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem neque vel quia delectus officia sapiente adipisci, harum
          excepturi est eveniet.
        </p>
      </div>
    </section>
  );
};

export default Details;