import { useSelector } from "react-redux";
import { SingleAscending } from "./SingleAscending";

export const Ascending = () => {
  const { displayOrder } = useSelector((store) => store.viewOrder);

  return (
    <span>
      {displayOrder &&
        displayOrder.map((item) => (
          <SingleAscending key={item._id} _id={item._id} item={item} />
        ))}
    </span>
  );
};
