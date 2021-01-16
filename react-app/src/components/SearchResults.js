import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const { term } = useParams()
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/biz/search/${term}`);
            setResults(response.results)
            console.log(`results: ${response.results}`)
        })()
    }, [])

    return (
        <h1>hi</h1>
    )
}

export default SearchResults;
