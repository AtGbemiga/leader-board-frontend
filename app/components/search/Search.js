import { getScores } from "@/app/store/features/score/scoreSlice";
import { useState } from "react";
import axios from "axios";

export const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const url = "https://leader-board-backend.vercel.app/api/v1/score/";
    try {
      const { data } = await axios.get(url);
      const result = data.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      setResults(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <div>
        <input
          type="search"
          placeholder="search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};
