"use client";
import { useState } from "react";
import { Ascending } from "../components/viewOrder/Ascending";
import { Descending } from "../components/viewOrder/Descending";
import { AscendBtn } from "../components/viewOrder/actionButtons/AscendBtn";
import { DescendBtn } from "../components/viewOrder/actionButtons/DescendBtn";
import {
  ascending,
  descending,
} from "../store/features/viewOrder/viewOrderSlice";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((store) => store.score);
  const [showAscending, setShowAscending] = useState(false);
  const [showDescending, setShowDescending] = useState(false);

  function handleAscending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(a.exactScore) - parseFloat(b.exactScore)
    );
    dispatch(ascending(sortedDetails));
    console.log("sorted", sortedDetails);
    setShowAscending(true);
    setShowDescending(false);
  }

  function handleDescending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(b.exactScore) - parseFloat(a.exactScore)
    );
    dispatch(descending(sortedDetails));
    console.log("sorted", sortedDetails);
    setShowDescending(true);
    setShowAscending(false);
  }

  return (
    <main className="container-lg d-lg-flex">
      <section
        className="col-lg-2 d-block bg-white d-lg-flex flex-column justify-content-center align-items-center"
        style={{ height: "fit-content" }}
      >
        <div className="flex-item" style={{ width: "100%" }}>
          <AscendBtn handleAscending={handleAscending} />
        </div>
        <div className="flex-item">
          <DescendBtn handleDescending={handleDescending} />
        </div>
      </section>
      <section className="col-lg-9 ms-lg-3">
        {showAscending && <Ascending />}
        {showDescending && <Descending />}
      </section>
    </main>
  );
};
export default page;
