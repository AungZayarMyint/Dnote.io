import { SquaresPlusIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

const SquarePlus = () => {
  return (
    <Link
      to={"/create"}
      className="bg-teal-600 p-2 text-white rounded-full w-50 h-50 fixed bottom-20 right-10"
    >
      <SquaresPlusIcon width={40} height={40} />
    </Link>
  );
};

export default SquarePlus;
