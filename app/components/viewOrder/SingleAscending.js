import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import {
  updateDetails,
  deleteDetails,
} from "@/app/store/features/score/scoreSlice";
import { ascending } from "@/app/store/features/viewOrder/viewOrderSlice";

export const SingleAscending = ({ _id, item }) => {
  const dispatch = useDispatch();
  const [ascendingForm, setAscendingForm] = useState({
    name: item.name,
    exactScore: item.exactScore,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setAscendingForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsEditMode(true);
  }

  async function handleUpdate() {
    const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;

    const formData = {
      name: ascendingForm.name,
      exactScore: ascendingForm.exactScore,
    };

    try {
      await axios.patch(url, formData);
      dispatch(
        updateDetails({
          _id,
          formData: {
            name: ascendingForm.name,
            exactScore: ascendingForm.exactScore,
          },
        })
      );
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  async function handleDelete() {
    const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;
    try {
      await axios.delete(url);
      dispatch(deleteDetails(_id));
      dispatch(ascending());
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  return (
    <div>
      {isEditMode ? (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={ascendingForm.name}
            onChange={handleChange}
          />
          <label htmlFor="exactScore">Score</label>
          <input
            type="text"
            id="exactScore"
            name="exactScore"
            value={ascendingForm.exactScore}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleUpdate}>
            Save
          </button>
        </form>
      ) : (
        <div key={_id}>
          <div>
            <div>
              <p>{item.name}</p>
            </div>
            <div>
              <p>{item.exactScore}</p>
            </div>
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
