import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div>
      {" "}
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};
