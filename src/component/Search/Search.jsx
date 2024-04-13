import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { callAPI } from "../../utils/callAPI";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    console.log(suggestions);
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%] md:w-[100%] mt-3">
      <div className="flex flex-col md:flex-row items-center h-10 bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="h-[100%] bg-gray-300 text-black border text-xs xl:text-sm w-full md:w-auto"
        >
          <option>Tất cả</option>
          <option>Nhà cửa</option>
          <option>Thực phẩm</option>
          <option>Thời trang</option>
          <option>Điện tử</option>
          <option>Công nghệ</option>
          <option>Sách</option>
          <option>Tất cả</option>
          <option>Nhà cửa</option>
          <option>Thực phẩm</option>
          <option>Thời trang</option>
          <option>Điện tử</option>
          <option>Công nghệ</option>
          <option>Sách</option>
          <option>Tất cả</option>
          <option>Nhà cửa</option>
          <option>Thực phẩm</option>
          <option>Thời trang</option>
          <option>Điện tử</option>
          <option>Công nghệ</option>
        </select>
        <input
          className="flex-grow items-center h-[100%] text-black w-full md:w-auto mt-2 md:mt-0"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={onHandleSubmit}
          className="h-[100%] w-[50px] bg-yellow-500 mt-2 md:mt-0"
        >
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-600" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black font-normal text-sm w-[48.8%] z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
