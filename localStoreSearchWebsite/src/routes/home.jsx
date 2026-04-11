import React from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  return (
  <div>
    <input type="search" id="siteSearch" />
    <button>Search</button>
  </div>
  );
}

export default Home;