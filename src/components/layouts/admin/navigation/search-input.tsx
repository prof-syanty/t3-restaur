function SearchInput() {
  return (
    <div className="relative hidden sm:block">
      <input
        className="h-10 w-full rounded-lg border-none bg-slate-100 pl-4 pr-10 text-sm text-gray-200 shadow-sm focus:outline-none focus:ring-0 xl:w-96"
        id="search"
        type="search"
        placeholder="Search website..."
      />

      {/* <button
              type="button"
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md p-2 text-gray-400 transition"
            >
              search icon
            </button> */}
    </div>
  );
}

export default SearchInput;
