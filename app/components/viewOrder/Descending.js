import { useSelector, useDispatch } from "react-redux";
import { descending } from "@/app/store/features/viewOrder/viewOrderSlice";
import { SingleDescending } from "./SingleDescending";
import { useState } from "react";

export const Descending = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((store) => store.score);
  const { descendingOrder } = useSelector((store) => store.viewOrder);
  const [toggle, setToggle] = useState(false);

  console.log("Details", details);
  function handleDescending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(b.exactScore) - parseFloat(a.exactScore)
    );
    dispatch(descending(sortedDetails));
    console.log("sorted", sortedDetails);
    setToggle((prevState) => !prevState);
  }

  return (
    <span>
      <button onClick={handleDescending} className="btn btn-dark ms-1">
        Descending
      </button>
      {toggle &&
        descendingOrder &&
        descendingOrder.map((item) => (
          <SingleDescending key={item._id} _id={item._id} item={item} />
        ))}
    </span>
  );
};
