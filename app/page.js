"use client";
import { useEffect } from "react";
import { ScoreContainer } from "./components/ScoreContainer";
import { getScores } from "./store/features/score/scoreSlice";
import { useDispatch } from "react-redux";
import { PostScore } from "./components/PostScore";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScores());
  }, []);
  return (
    <main>
      <ScoreContainer />
      <PostScore />
    </main>
  );
}
