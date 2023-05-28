import { useSelector } from "react-redux";
import { Score } from "./Score";
export const ScoreContainer = () => {
  const data = useSelector((state) => state.score.details);
  const m = data.map((value) => (
    <Score
      key={value._id}
      _id={value._id}
      name={value.name}
      exactScore={value.exactScore}
    />
  ));
  return <div>{m}</div>;
};
