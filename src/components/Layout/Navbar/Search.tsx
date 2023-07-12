import { useState } from "react";

export const Search = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
      ) : (
        <button
          onClick={() => {
            setIsActive(true);
          }}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      )}
    </>
  );
};
