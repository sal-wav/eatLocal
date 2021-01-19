import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import "./styles/searchResults.css";

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
        <div className="searchPage container">
            <div className="">
                <h2 id="searchHead">{`"${term}" in Your Neighborhood`}</h2>
                <div className="results">
                    {results.map((result) => (
                        <div className="card searchCard container" key={result.biz.id}>
                            <div className="searchImgContainer">
                                <img className="searchImg" src={result.biz.image_url}></img>
                            </div>
                            <div className="searchPreview container">
                                <NavLink className="navLink resultLink previewText" to={`/biz/${result.biz.id}`}>{result.biz.name}</NavLink>
                                <ul className="catList previewText">{result.categories.map(category => (
                                    <li className="listItem" key={category.id}>- {category.name} </li>
                                ))}</ul>
                                <div className="previewText container">
                                {result.features.map(feature => (
                                    <div className="feat container" key={feature.id}>
                                        <i class="fas fa-check"></i>
                                        <p>{feature.name}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
