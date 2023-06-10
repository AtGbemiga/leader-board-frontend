import { useSelector } from "react-redux";
import { SingleDescending } from "./SingleDescending";

export const Descending = () => {
  const { descendingOrder } = useSelector((store) => store.viewOrder);

  return (
    <span>
      {descendingOrder &&
        descendingOrder.map((item) => (
          <SingleDescending key={item._id} _id={item._id} item={item} />
        ))}
    </span>
  );
};
