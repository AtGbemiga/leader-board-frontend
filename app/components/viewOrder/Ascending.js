import { useSelector, useDispatch } from "react-redux";
import { ascending } from "@/app/store/features/viewOrder/viewOrderSlice";
import { SingleAscending } from "./SingleAscending";
import { useEffect } from "react";
import { setActiveComponent } from "@/app/store/features/activeComponent/activeSlice";

export const Ascending = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((store) => store.score);
  const { displayOrder } = useSelector((store) => store.viewOrder);

  useEffect(() => {
    dispatch(setActiveComponent("Component1"));
  }, []);

  console.log("Details", details);
  function handleAscending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(a.exactScore) - parseFloat(b.exactScore)
    );
    dispatch(ascending());
    dispatch(ascending(sortedDetails));
    console.log("sorted", sortedDetails);
  }

  return (
    <>
      <button onClick={handleAscending}>click</button>
      {displayOrder &&
        displayOrder.map((item) => (
          <SingleAscending key={item._id} _id={item._id} item={item} />
        ))}
    </>
  );
};
