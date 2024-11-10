import { cn } from "@/utils/cn"; // Assuming 'cn' is a utility function for combining class names.
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitSearch: (e: React.FormEvent) => void; // Handle form submission
  className?: string;
};

function SearchBox({ value, onChange, onSubmitSearch, className }: Props) {
  return (
    <form
      onSubmit={onSubmitSearch}
      className={cn(
        "flex relative items-center justify-center h-10",
        className
      )}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter city"
        className="px-4 py-2 w-[230px] border border-black rounded-l-md focus:outline-none focus:border-yellow-500 h-full"
      />
      <button
        type="submit"
        className="px-4 py-[9px] bg-yellow-300 text-black border border-black rounded-r-md focus:outline-none hover:bg-black hover:text-yellow-300 whitespace-nowrap h-full">
        <IoSearchSharp />
      </button>
    </form>
  );
}

export default SearchBox;
