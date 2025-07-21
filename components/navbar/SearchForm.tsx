'use client';

import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  categoryName?: string; // Optional prop
};

const SearchForm = ({ categoryName = "All Categories" }: Props) => {
  const placeholder = `Search in ${categoryName}...`;

  return (
    <form
      action="/search"
      className="w-full h-[40px] border-2 border-black flex items-center rounded-md overflow-hidden"
    >
      <button
        type="submit"
        className="w-[50px] h-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition"
      >
        <FaSearch className="text-gray-700 size-4" />
      </button>

      <input
        name="query"
        className="flex-1 px-3 text-sm font-medium outline-none"
        placeholder={placeholder}
        required
      />
    </form>
  );
};

export default SearchForm;