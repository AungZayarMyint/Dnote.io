import { useEffect, useState } from "react";
import Note from "../components/Note";
import SquarePlus from "../components/SquarePlus";
import { Comment } from "react-loader-spinner";

const Index = () => {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false);

  const getNotes = async () => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}/notes`);
    const notes = await response.json();
    setNotes(notes);
    setLoading(false);
  };

  useEffect((_) => {
    getNotes();
  }, []);

  return (
    <section className="flex gap-6 px-10 mt-10 flex-wrap">
      {!loading && notes.length > 0 ? (
        <>
          {notes.map((note) => (
            <Note key={note._id} note={note} />
          ))}
        </>
      ) : (
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
      )}

      <SquarePlus />
    </section>
  );
};

export default Index;
