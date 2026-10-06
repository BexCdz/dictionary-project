import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  // Set default keyword to empty so the input starts blank
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    if (event) event.preventDefault();

    // Prevent submitting empty API requests
    if (!keyword.trim()) return;

    let apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search-section">
        {/* Label prompt above the search box */}
        <label htmlFor="dictionary-search" className="search-label">
          What word do you want to look up?
        </label>

        <form onSubmit={search}>
          <input
            id="dictionary-search"
            type="search"
            autoFocus={true}
            placeholder="e.g. serendipity, book, luminous..."
            onChange={handleKeywordChange}
            value={keyword}
          />
        </form>
      </section>

      {/* Renders results once searched, or a prompt hint initially */}
      {results ? (
        <Results results={results} />
      ) : (
        <p className="search-hint">Type a word above and press Enter to search.</p>
      )}
    </div>
  );
}