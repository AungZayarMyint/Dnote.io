import { useEffect, useState } from "react";
import Note from "../components/Note";
import SquarePlus from "../components/SquarePlus";
import { Comment } from "react-loader-spinner";

import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getNotes = async (pageNumber) => {
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_API}/notes?page=${pageNumber}`
    );
    const { notes, totalNote, totalPages } = await response.json();
    setTotalPages(totalPages);
    setNotes(notes);
    setLoading(false);
  };

  useEffect(
    (_) => {
      getNotes(currentPage);
    },
    [currentPage]
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const customAlert = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="flex gap-6 px-10 mt-10 flex-wrap mx-auto w-full justify-center">
      {!loading && notes.length > 0 ? (
        <>
          {notes.map((note) => (
            <Note
              key={note._id}
              note={note}
              getNotes={getNotes}
              customAlert={customAlert}
            />
          ))}

          <div className="w-full flex items-center justify-center gap-3">
            {currentPage > 1 && (
              <button
                type="button"
                className="text-white font-medium bg-teal-600 px-3  py-1"
                onClick={handlePrev}
              >
                Prev
              </button>
            )}
            {currentPage < totalPages && (
              <button
                type="button"
                className="text-white font-medium bg-teal-600 px-3  py-1"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Comment
            visible={true}
            height="110"
            width="110"
            ariaLabel="comment-loading"
            wrapperStyle={{
              flex: 1,
              marginTop: 240,
              justifyContent: "center",
              alignItems: "center",
            }}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
          {!loading && notes.length === 0 && <p>No notes baby!</p>}
        </div>
      )}

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

      <SquarePlus />
    </section>
  );
};

export default Index;
