import React, {useState, useEffect} from 'react';
import {getBiz} from "../services/biz";

const HomePage = () => {
    const [bizFeed, setBizFeed] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getBiz();
            // console.log(`three biz: ${JSON.stringify(response.biz)}`)
            setBizFeed(response.biz.slice(0, 3));
        })();
    }, [])

    if (!bizFeed) {
        return null
    }

    return (
        <div>
            <div className="featuredBizContainer">
                <h1>Find the best food in town</h1>
                <div className="cardsContainer">
                {bizFeed.map((biz) => (
                    <div className='card' key={biz.id}>
                        <div>
                            <img className='feedImg' src={biz.image_url}></img>
                        </div>
                        <div className='cardBody'>
                            <h2>{biz.name}</h2>
                            {/* <h3>{biz.categories[0], biz.categories[1], biz.categories[2]}</h3> */}
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    )
}

export default HomePage;
