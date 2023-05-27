import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/features/score/scoreSlice";

export const PostScore = () => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    _id: "",
    name: "",
    exactScore: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "https://leader-board-backend.vercel.app/api/v1/score/";
    try {
      const { data } = await axios.post(url, formdata);
      dispatch(addDetails(data.name, data.exactScore));
    } catch (error) {
      console.log(error.response);
      throw error;
    }
    setFormData({ name: "", exactScore: "" });
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <hr />
      <label htmlFor="exactScore">Score</label>
      <input
        type="text"
        id="exactScore"
        name="exactScore"
        onChange={handleChange}
      />
      <hr />
      <button type="submit" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
};
