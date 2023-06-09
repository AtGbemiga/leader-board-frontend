"use client";
import { Ascending } from "../components/viewOrder/Ascending";
import { Descending } from "../components/viewOrder/Descending";

const page = () => {
  return (
    <main className="container-lg d-flex justify-content-around">
      <div className="col-6">
        <Ascending />
      </div>
      <div className="col-6">
        <Descending />
      </div>
    </main>
  );
};
export default page;
