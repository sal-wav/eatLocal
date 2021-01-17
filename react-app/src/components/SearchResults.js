import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const { term } = useParams()
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await fetch(`/api/biz/search/${term}`);
            response = await response.json();
            setResults(response.results)
            console.log(`results: ${JSON.stringify(response.results)}`)
        })()
    }, [term])

    return (
        <h1>hi</h1>
    )
}

export default SearchResults;
