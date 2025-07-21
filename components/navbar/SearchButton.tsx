import { Search, X } from "lucide-react";
import React from "react";



const SearchButton = ({  }) => {
  return (
    <button
      
      className="size-[50px]  bg-black flex justify-center items-center cursor-pointer text-white"
    >
        <X className="size-4" />

    </button>
  );
};

export default SearchButton;
