import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const Search = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const searchRef = useRef(null);
  const data = useSelector((store) => store.score.details);

  const fetchData = (value) => {
    const lowercaseValue = value ? value.toString().toLowerCase() : "";
    const hasNumber = /\d/.test(lowercaseValue);
    const hasString = /[a-z]/i.test(lowercaseValue);

    if (hasNumber && hasString) {
      setError(true);
      setResults([]);
      return;
    }

    const result = data.filter((user) => {
      const lowercaseName =
        user && user.name ? user.name.toString().toLowerCase() : "";
      const exactScore =
        user && user.exactScore ? user.exactScore.toString().toLowerCase() : "";

      return (
        lowercaseName.includes(lowercaseValue) ||
        exactScore.includes(lowercaseValue)
      );
    });

    setError(false);
    setResults(result);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSvgClick = () => {
    setSearchBox((prevState) => !prevState);
    setInput("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  useEffect(() => {
    if (searchBox && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchBox]);

  return (
    <div className="mt-2" style={{ width: "100%" }}>
      <div className="d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          onClick={handleSvgClick}
          cursor="pointer"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <div className="ps-2 col-6">
          {searchBox && (
            <input
              type="search"
              placeholder="search"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              ref={searchRef}
              className="form-control rounded-pill col-4"
              style={{ textIndent: 10 }}
            />
          )}
        </div>
      </div>
      {error && (
        <p className="text-danger m-0 p-0">Enter number or letter, not both.</p>
      )}
    </div>
  );
};
