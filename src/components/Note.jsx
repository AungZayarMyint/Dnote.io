import React from "react";
import {
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="w-2/5 border-t-4 border-t-teal-600 shadow-lg p-3">
      <h3 className="text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur.
      </h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque
        vel quia delectus officia sapiente adipisci, harum excepturi est
        eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        neque vel quia delectus officia sapiente adipisci, harum excepturi est
        eveniet.
      </p>
      <div className="flex items-center justify-end gap-2 mt-3">
        <ArchiveBoxXMarkIcon width={25} className="text-red-600" />
        <Link to={"/edit/1"}>
          <PencilSquareIcon width={25} className="text-teal-600" />
        </Link>
        <Link to={"/notes/1"}>
          <EyeIcon width={25} className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default Note;
