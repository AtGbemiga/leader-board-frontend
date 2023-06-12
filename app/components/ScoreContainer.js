import TimeAgo from "../store/features/timeAgo/TimeAgo";

import { useSelector } from "react-redux";
import { Score } from "./Score";
export const ScoreContainer = () => {
  const data = useSelector((state) => state.score.details);

  const m = data.map((value) => (
    <article key={value._id} className="card text-left my-2">
      <Score _id={value._id} name={value.name} exactScore={value.exactScore} />
      <div className="ps-3">
        <TimeAgo timeStamp={value.date} />
      </div>
    </article>
  ));

  return <div>{m}</div>;
};
