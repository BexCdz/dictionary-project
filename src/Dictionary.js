import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    if (event) event.preventDefault();
    if (!keyword.trim()) return;

    let apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3";

    // 1. Fetch Definition
    let dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(dictionaryUrl).then(handleDictionaryResponse);

    // 2. Fetch Images via SheCodes Images API
    let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesUrl).then(handleImagesResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search-section">
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

      {results ? (
        <>
          <Results results={results} />
          <Photos photos={photos} />
        </>
      ) : (
        <p className="search-hint">Type a word above and press Enter to search.</p>
      )}
    </div>
  );
}