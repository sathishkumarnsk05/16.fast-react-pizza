import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const naviagte = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    naviagte(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="fo focus:de ocus:ring-yellow-300 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 focus:transition-all sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
