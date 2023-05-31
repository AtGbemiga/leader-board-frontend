"use client";
import { useEffect, useState, useRef } from "react";
import { ScoreContainer } from "./components/ScoreContainer";
import { getScores } from "./store/features/score/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { PostScore } from "./components/PostScore";
import Modal from "./components/modal/Modal";
import DeleteModal from "./components/modal/Delete";
import PostModal from "./components/modal/Post";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { isOpenDelete } = useSelector((store) => store.modal);
  const { isOpenPost } = useSelector((store) => store.modal);
  const [isCardFixed, setCardFixed] = useState(false);
  const postScoreRef = useRef(null);

  useEffect(() => {
    dispatch(getScores());

    const handleScroll = () => {
      const postScoreElement = postScoreRef.current;
      const cardElement = document.getElementById("card");

      if (postScoreElement && cardElement) {
        const postScoreRect = postScoreElement.getBoundingClientRect();
        const cardRect = cardElement.getBoundingClientRect();

        if (cardRect.top <= 0 && postScoreRect.bottom >= cardRect.height) {
          setCardFixed(true);
        } else {
          setCardFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="container-lg">
      <PostScore ref={postScoreRef} />
      <div className="sticky-card-wrapper">
        <div
          id="card"
          className={`card ${isCardFixed ? "fixed" : ""}`}
          style={{ backgroundColor: isCardFixed ? "blue" : "" }}
        >
          <div className="row card-body">
            <div className="col">
              <h6 style={{ margin: 0, padding: 0 }}>Name</h6>
            </div>
            <div className="col">
              <h6 style={{ margin: 0, padding: 0 }}>Score</h6>
            </div>
            <div className="col col-lg-2">
              <h6 style={{ margin: 0, padding: 0 }}>Edit/Delete</h6>
            </div>
          </div>
        </div>
      </div>
      <ScoreContainer />

      {isOpenPost && <PostModal />}
      {isOpenDelete && <DeleteModal />}
      {isOpen && <Modal />}
    </main>
  );
}
