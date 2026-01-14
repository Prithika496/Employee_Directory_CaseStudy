import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const value = term.trim();

    const timer = setTimeout(() => {
      if (value.length === 0) {
        onSearch(null);          
      } 
      else if (value.length >= 2) {
        onSearch(value);         
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [term, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search by name or department"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default SearchBar;
