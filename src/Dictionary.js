import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data)
        
    }

    function search(event){
        event.preventDefault()
        
        let apiKey = "6eo2f8064f04d58b91065a4e4bb3c0t3";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} value={keyword}/>
            </form>
            <Results results={results}/>
        </div>
    )
}