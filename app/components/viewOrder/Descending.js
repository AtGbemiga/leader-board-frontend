import { useSelector, useDispatch } from "react-redux";
import { descending } from "@/app/store/features/viewOrder/viewOrderSlice";
import { SingleDescending } from "./SingleDescending";

export const Descending = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((store) => store.score);
  const { descendingOrder } = useSelector((store) => store.viewOrder);

  console.log("Details", details);
  function handleDescending() {
    const sortedDetails = [...details].sort(
      (a, b) => parseFloat(b.exactScore) - parseFloat(a.exactScore)
    );
    dispatch(descending());
    dispatch(descending(sortedDetails));
    console.log("sorted", sortedDetails);
  }

  return (
    <span>
      <button onClick={handleDescending} className="btn btn-dark ms-1">
        Descending
      </button>
      {descendingOrder &&
        descendingOrder.map((item) => (
          <SingleDescending key={item._id} _id={item._id} item={item} />
        ))}
    </span>
  );
};
