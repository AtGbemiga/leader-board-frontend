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
import { Loader } from "./components/Loader/Loader";
import { Ascending } from "./components/viewOrder/Ascending";
import { Descending } from "./components/viewOrder/Descending";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { isOpenDelete } = useSelector((store) => store.modal);
  const { isOpenPost } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.score);
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
      <section className="pt-3">
        <Ascending />
        <Descending />
      </section>
      <PostScore />
      <Header />
      {isLoading && <Loader />}
      {allOrSearchData}

      {isOpenPost && <PostModal />}
      {isOpenDelete && <DeleteModal />}
      {isOpen && <Modal />}
    </main>
  );
}
