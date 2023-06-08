import { useSelector } from "react-redux";
import { Score } from "./Score";
import { useEffect } from "react";
import { setActiveComponent } from "../store/features/activeComponent/activeSlice";
import { useDispatch } from "react-redux";

export const ScoreContainer = () => {
  const data = useSelector((state) => state.score.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveComponent("Component3"));
  }, []);

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
