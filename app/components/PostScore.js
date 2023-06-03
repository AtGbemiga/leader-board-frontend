import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/features/score/scoreSlice";
import {
  postOpenModal,
  postCloseModal,
} from "../store/features/modal/modalSlice";

export const PostScore = () => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    name: "",
    exactScore: "",
  });
  const [nameError, setNameError] = useState("");
  const [scoreError, setScoreError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "name") {
      if (!/^([a-zA-Z]){1,25}$/.test(value)) {
        setNameError("Enter only letters. Max of 25 characters.");
      } else {
        setNameError("");
      }
    }

    if (name === "exactScore") {
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 1000) {
        setScoreError("Enter a number between 0 and 1000.");
      } else {
        setScoreError("");
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "https://leader-board-backend.vercel.app/api/v1/score/";
    try {
      const { data } = await axios.post(url, formdata);
      dispatch(addDetails(data.name, data.exactScore));
      setTimeout(() => {
        dispatch(postOpenModal());
        setTimeout(() => {
          dispatch(postCloseModal());
        }, 3000);
      }, 3000);
    } catch (error) {
      console.log(error.response);
      throw error;
    }
    setFormData({ name: "", exactScore: "" });
  }

  return (
    <>
      <form
        className="py-3 d-flex justify-content-center align-items-center gap-3"
        style={{ boxSizing: "border-box" }}
      >
        <label htmlFor="name" className="fw-bold form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className="form-control"
          aria-labelledby="name"
        />

        <label htmlFor="exactScore" className="fw-bold form-label">
          Score
        </label>
        <input
          type="text"
          id="exactScore"
          name="exactScore"
          onChange={handleChange}
          className="form-control"
          aria-labelledby="exactScore"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary rounded-pill fw-bold"
          style={{ width: "24rem" }}
          disabled={
            nameError || scoreError || !formdata.name || !formdata.exactScore
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
            style={{ color: "white" }}
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              style={{ color: "white" }}
              className="text-white"
            />
          </svg>
          Post
        </button>
      </form>
      <span>
        <div class="row">
          <div class="col-6" style={{ paddingLeft: "6rem" }}>
            {nameError && <p className="text-danger">{nameError}</p>}
          </div>
          <div class="col-4">
            {scoreError && <p className="text-danger">{scoreError}</p>}
          </div>
        </div>
      </span>
    </>
  );
};
