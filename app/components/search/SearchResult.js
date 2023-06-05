import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteDetails,
  updateDetails,
} from "@/app/store/features/score/scoreSlice";
import {
  openModal,
  closeModal,
  deleteOpenModal,
  deleteCloseModal,
} from "@/app/store/features/modal/modalSlice";

export const SearchResult = ({ _id, result }) => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    name: result.name,
    exactScore: result.exactScore,
  });
  const [isEditMode, setEditMode] = useState(false);

  async function handleDelete() {
    const url = `https://leader-board-backend.vercel.app/api/v1/score/${_id}`;
    try {
      await axios.delete(url);
      dispatch(deleteDetails(_id));
      setTimeout(() => {
        dispatch(deleteOpenModal());
        setTimeout(() => {
          dispatch(deleteCloseModal());
        }, 3000);
      }, 3000);
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  function handleEdit() {
    setEditMode((prevEditMode) => !prevEditMode);
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
      setTimeout(() => {
        dispatch(openModal());
        setTimeout(() => {
          dispatch(closeModal());
        }, 3000);
      }, 3000);

      setEditMode(false);
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }

  return (
    <div>
      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            className="form-control"
            aria-describedby="name"
          />
          <label htmlFor="exactScore" className="form-label">
            Score
          </label>
          <input
            type="text"
            id="exactScore"
            name="exactScore"
            value={formdata.exactScore}
            onChange={handleChange}
            className="form-control"
            aria-describedby="exactScore"
          />
          <button type="submit" className="btn btn-success mt-1">
            Save
          </button>
        </form>
      ) : (
        <div
          className="card text-left my-2"
          style={{ backgroundColor: "white" }}
        >
          <div className="row card-body">
            <div className="col">
              <p style={{ margin: 0, padding: 0 }}>{result.name}</p>
            </div>
            <div className="col">
              <p style={{ margin: 0, padding: 0 }}>{result.exactScore}</p>
            </div>
            <div className="col col-lg-2">
              <button
                onClick={handleEdit}
                className="me-3 rounded-circle bg-success border border-0 text-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </button>
              <button
                onClick={handleDelete}
                className="mx-3 rounded-circle bg-danger border border-0 text-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
