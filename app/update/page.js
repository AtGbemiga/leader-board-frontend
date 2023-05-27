"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../store/features/score/scoreSlice";

const Update = ({ _id, formData, setFormData }) => {
  const dispatch = useDispatch();
  const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleEdit(event) {
    event.preventDefault();
    try {
      const { data } = await axios.patch(url, formData);
      dispatch(addDetails(data.name, data.exactScore));
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  if (!formData) {
    return null; // Add a condition to handle the case when formData is undefined
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <hr />
      <label htmlFor="exactScore">Score</label>
      <input
        type="text"
        id="exactScore"
        name="exactScore"
        onChange={handleChange}
        value={formData.exactScore}
      />
      <hr />
      <button type="submit" onClick={handleEdit}>
        Update
      </button>
    </form>
  );
};

export default Update;
