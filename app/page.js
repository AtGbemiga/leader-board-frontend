"use client";
import { useEffect } from "react";
import { ScoreContainer } from "./components/ScoreContainer";
import { getScores } from "./store/features/score/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { PostScore } from "./components/PostScore";
import Modal from "./components/modal/Modal";
import DeleteModal from "./components/modal/Delete";
import PostModal from "./components/modal/Post";
import { Header } from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { isOpenDelete } = useSelector((store) => store.modal);
  const { isOpenPost } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getScores());
  }, []);

  return (
    <main className="container-lg">
      <PostScore />
      <Header />
      <ScoreContainer />

      {isOpenPost && <PostModal />}
      {isOpenDelete && <DeleteModal />}
      {isOpen && <Modal />}
    </main>
  );
}
