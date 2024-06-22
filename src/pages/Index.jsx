import Note from "../components/Note";
import SquarePlus from "../components/SquarePlus";

const Index = () => {
  return (
    <section className="flex gap-6 px-10 mt-10 flex-wrap">
      <Note />
      <Note />
      <Note />
      <SquarePlus />
    </section>
  );
};

export default Index;
