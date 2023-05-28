"use client";
import { useEffect } from "react";
import { ScoreContainer } from "./components/ScoreContainer";
import { getScores } from "./store/features/score/scoreSlice";
import { useDispatch } from "react-redux";
import { PostScore } from "./components/PostScore";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScores());
  }, []);
  return (
    <main className="container-lg">
      <PostScore />
      <div className="card">
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
      <ScoreContainer />
    </main>
  );
}
