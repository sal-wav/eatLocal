import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import "./styles/searchResults.css";

const SearchResults = () => {
    const { term } = useParams()
    const [results, setResults] = useState([]);
    const nums = [1, 2, 3, 4, 5];
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let response = await fetch(`/api/biz/search/${term}`);
            response = await response.json();
            setResults(response.results);
            setIsLoading(false);
        })()
    }, [term])

    return (isLoading) ? (
        <div className="page container">
            <img alt="" id="loadingGif" src="https://eatlocalapp.s3.amazonaws.com/Spin-1s-243px.gif"></img>
        </div>
    ) : (
        <div className="searchPage container">
            <div className="resultsPage">
                <h2 id="searchHead">{`"${term}" in Your Neighborhood`}</h2>
                {results.length === 0 ?
                <div className="results">
                <h2>Try another search ... maybe a sandwich ...</h2>
                </div> : null}
                <div className="results">
                    {results.map((result) => (
                        <div className="card searchCard container" key={result.biz.id}>
                            <div className="searchImgContainer">
                                <img alt="" className="searchImg" src={result.biz.image_url}></img>
                            </div>
                            <div className="searchPreview container">
                                <NavLink className="navLink resultLink previewText" to={`/biz/${result.biz.id}`}>{result.biz.name}</NavLink>

                                <div className="totalReviews container">
                                    {nums.map(n => (
                                        <div key={n} className={n <= result.avg_rating ? `star${Math.round(result.avg_rating)} medStar star` : "zeroStar medStar star"}><i className="fas fa-star fa-med"></i></div>
                                    ))}
                                    <h3>{result.biz.review_count} reviews</h3>
                                </div>

                                <ul className="catList previewText">{result.categories.map(category => (
                                    <li className="listItem" key={category.id}>• {category.name} </li>
                                ))}</ul>
                                <div className="previewText container">
                                {result.features.map(feature => (
                                    <div className="feat container" key={feature.id}>
                                        <i className="fas fa-check"></i>
                                        <p>{feature.name}</p>
                                    </div>
                                ))}
                                </div>
                                {/* <p className="previewText">{result.biz.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
