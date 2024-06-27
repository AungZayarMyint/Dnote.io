import React, { useContext } from "react";
import {
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../contexts/UserContext";

const Note = ({ note, getNotes, customAlert }) => {
  const { token } = useContext(UserContext);
  const { _id, title, content, createdAt } = note;

  const deleteNote = async () => {
    const response = await fetch(`${import.meta.env.VITE_API}/delete/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
    if (response.status === 204) {
      getNotes();
      customAlert("Post Deleted!");
    }
  };

  return (
    <div className="w-2/5 border-t-4 border-t-teal-600 shadow-lg p-3 h-fit">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm">{content.slice(0, 100)}</p>
      <div className="flex items-center justify-between gap-2 mt-3 border-t">
        <p>{formatISO9075(new Date(createdAt))}</p>
        <div className="flex items-center justify-end gap-2 mt-3">
          <ArchiveBoxXMarkIcon
            width={25}
            className="text-red-600 cursor-pointer"
            onClick={deleteNote}
          />
          <Link to={"/edit/" + _id}>
            <PencilSquareIcon
              width={25}
              className="text-teal-600 cursor-pointer"
            />
          </Link>
          <Link to={"/notes/" + _id}>
            <EyeIcon width={25} className="text-gray-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
