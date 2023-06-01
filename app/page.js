"use client";
import { useEffect, useState } from "react";
import { ScoreContainer } from "./components/ScoreContainer";
import { getScores } from "./store/features/score/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { PostScore } from "./components/PostScore";
import Modal from "./components/modal/Modal";
import DeleteModal from "./components/modal/Delete";
import PostModal from "./components/modal/Post";
import { Header } from "./components/Header/Header";
import { Search } from "./components/search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchResultsList } from "./components/search/SearchResultsList";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { isOpenDelete } = useSelector((store) => store.modal);
  const { isOpenPost } = useSelector((store) => store.modal);
  //fake search. Not the proper method
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(getScores());
  }, []);

  const allOrSearchData =
    results.length !== 0 ? (
      <SearchResultsList results={results} />
    ) : (
      <ScoreContainer />
    );
  //
  return (
    <main className="container-lg">
      <Search setResults={setResults} />
      <PostScore />
      <Header />
      {allOrSearchData}

      {isOpenPost && <PostModal />}
      {isOpenDelete && <DeleteModal />}
      {isOpen && <Modal />}
    </main>
  );
}
