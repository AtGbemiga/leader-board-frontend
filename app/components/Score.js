import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteDetails,
  updateDetails,
} from "../store/features/score/scoreSlice";

export const Score = ({ _id, name, exactScore }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [formdata, setFormData] = useState({
    name: name,
    exactScore: exactScore,
  });

  async function handleDelete() {
    const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;
    try {
      const { data } = await axios.delete(url);
      dispatch(deleteDetails(_id));
      return data;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;
    try {
      await axios.patch(url, formdata);
      dispatch(updateDetails({ _id, ...formdata }));
      setEditMode(false);
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
          <label htmlFor="exactScore">Score</label>
          <input
            type="text"
            id="exactScore"
            name="exactScore"
            value={formdata.exactScore}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>{name}</p>
          <p>{exactScore}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};
