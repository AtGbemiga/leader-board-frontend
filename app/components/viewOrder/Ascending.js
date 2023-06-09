import { useSelector, useDispatch } from "react-redux";
import { ascending } from "@/app/store/features/viewOrder/viewOrderSlice";
import { SingleAscending } from "./SingleAscending";
import { useState } from "react";

export const Ascending = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((store) => store.score);
  const { displayOrder } = useSelector((store) => store.viewOrder);
  const [toggle, setToggle] = useState(false);

  console.log("Details", details);
  function handleAscending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(a.exactScore) - parseFloat(b.exactScore)
    );
    dispatch(ascending(sortedDetails));
    console.log("sorted", sortedDetails);
    setToggle((prevState) => !prevState);
  }

  return (
    <span>
      <button onClick={handleAscending} className="btn btn-dark">
        Ascending
      </button>
      {toggle &&
        displayOrder &&
        displayOrder.map((item) => (
          <SingleAscending
            key={item._id}
            _id={item._id}
            item={item}
            handleAscending={handleAscending}
          />
        ))}
    </span>
  );
};
