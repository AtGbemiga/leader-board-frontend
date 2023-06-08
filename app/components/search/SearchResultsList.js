import { SearchResult } from "./SearchResult";
import { useEffect } from "react";
import { setActiveComponent } from "@/app/store/features/activeComponent/activeSlice";
import { useDispatch } from "react-redux";

export const SearchResultsList = ({ results }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveComponent("Component4"));
  }, []);
  return (
    <div>
      {" "}
      {results.map((result, id) => {
        return (
          <SearchResult key={result._id} _id={result._id} result={result} />
        );
      })}
    </div>
  );
};
