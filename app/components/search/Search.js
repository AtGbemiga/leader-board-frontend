import { getScores } from "@/app/store/features/score/scoreSlice";
import { useState } from "react";
import axios from "axios";

export const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const { data } = await axios.get(
        "https://leader-board-backend.vercel.app/api/v1/score/"
      );
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
    <div>
      <input
        type="search"
        placeholder="search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
