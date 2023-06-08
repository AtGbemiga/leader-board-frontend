"use client";
import { useEffect, useState } from "react";
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
import { ScoreContainer } from "./components/ScoreContainer";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { activeComponent } = useSelector((store) => store.displayRank);
  const { isOpenDelete } = useSelector((store) => store.modal);
  const { isOpenPost } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.score);
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(getScores());
  }, []);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Component3":
        return <ScoreContainer />;
      case "Component2":
        return <Descending />;
      case "Component1":
        return <Ascending />;
      case "Component4":
        return <Search setResults={setResults} />;
      default:
        return null;
    }
  };

  return (
    <main className="container-lg">
      <Search setResults={setResults} />
      <PostScore />
      <Header />
      {isLoading && <Loader />}
      {renderActiveComponent()}

      {isOpenPost && <PostModal />}
      {isOpenDelete && <DeleteModal />}
      {isOpen && <Modal />}
    </main>
  );
}
