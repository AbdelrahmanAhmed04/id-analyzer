import "./App.css";
import IdAnalyser from "./components/IdAnalyser";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [clicked, setClicked] = useState(false);
  const [updated, setUpdated] = useState(id);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    setUpdated(id);
    setClicked(true);
  };
  const returnId = () => {
    if (clicked === true) {
      return <IdAnalyser id={updated} />;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col	gap-20 h-screen bg-neutral-50 -mt-10">
      <h1 className="text-3xl font-bold text-[#3ba897]">Egypt ID Analyzer</h1>

      <form
        className="flex-col flex gap-5 items-left w-10/12 md:w-6/12 "
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="text-left w-full" htmlFor="id">
          Enter Your ID Number
        </label>
        <input
          type="number"
          pattern="[0-9]*"
          id="id"
          name="id"
          onChange={handleChange}
          autoComplete="off"
          className="bg-[#eaeeed] rounded-md h-10 w-full p-2"
        />

        <button
          className="bg-[#5ba897] hover:bg-[#4d8e80] w-40 rounded-lg h-10 text-white "
          onClick={handleClick}
          type="submit"
        >
          Analyse my ID!
        </button>
      </form>
      {returnId()}
    </div>
  );
}
export default App;
