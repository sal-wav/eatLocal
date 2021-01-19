import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {getBiz} from "../services/biz";
import "./styles/home.css";

const HomePage = () => {
    const [bizFeed, setBizFeed] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getBiz();
            // console.log(`three biz: ${JSON.stringify(response.biz)}`)
            setBizFeed(response.results.slice(0, 3));
        })();
    }, [])

    if (!bizFeed) {
        return 'loading'
    }

    return bizFeed && (
        <div className="page">
            <div className="featuredBizContainer">
                <h1 id="homeHead">Find the best food in town</h1>
                <div className="cardsContainer">
                {bizFeed.map((biz) => (
                    <div className='card' key={biz.biz.id}>
                        <div>
                            <img className='feedImg' src={biz.biz.image_url}></img>
                        </div>
                        <div className='cardBody'>
                            <NavLink className='navLink homeLink' to={`/biz/${biz.biz.id}`}>{biz.biz.name}</NavLink>
                            <div className='container'>
                            {biz.features.map(feature => (
                                <div className="feat container" key={feature.id}>
                                    <i className="fas fa-check"></i>
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

export default HomePage;
