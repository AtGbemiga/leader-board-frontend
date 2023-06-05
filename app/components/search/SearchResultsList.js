import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
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
