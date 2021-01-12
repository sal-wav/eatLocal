import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { bizFeatures } from '../services/categoryFeature';
import "./styles/bizPage.css";

const BizPage = () => {
    const { bizId } = useParams();
    const [features, setFeatures] = useState([]);
    const [biz, setBiz] = useState(null);


    const menu = ['taco', 'torta', 'flautas', 'burrito', 'chips', 'salsa', 'guac', 'huevos rancheros',]

    useEffect(() => {
        (async () => {
            const response = await bizFeatures(bizId);
            setBiz(response.biz);
            console.log(`biz: ${JSON.stringify(response.biz)}`)
            setFeatures(response.features);
        })();
    }, [bizId]);

    if (!biz || !features) return 'loading';
    console.log(`food: ${biz.food}`)

    return (
        // <div className="pageContainer">
            <div className="pageContainer">
                <div className="photoHeader">
                    {/* <div className="photos"> */}
                    <img className='coverImg' src={biz.image_url}></img>
                    <img className='coverImg' src={biz.image_url}></img>
                    <img className='coverImg' src={biz.image_url}></img>
                    {/* </div> */}
                    <div className="aboutContainer">
                        <div className="about">
                            <h1>{biz.name}</h1>
                            <h3>{biz.phone_num}</h3>
                        </div>
                    </div>
                </div>
                <div className="infoContainer">
                    <div className="leftContainer">
                        <p>{biz.description}</p>
                        {features.map((feature) => (
                            <div key={feature.id}>
                                <p>{feature.name}</p>
                            </div>
                        ))}
                        <h1>What's on the menu</h1>
                        <NavLink to={`/foodform/biz/${bizId}`}>Add menu items</NavLink>
                        <div className="menuContainer">
                            {/* <div> */}
                            {menu.map((menuItem) => (
                                <div className="itemContainer" key={menuItem}>
                                    <h3>{menuItem}</h3>
                                </div>
                            ))}
                            {/* </div> */}
                        </div>
                    </div>


                    <div className="sidebarContainer">
                        <div className="sidebar">
                            <h3>hi</h3>
                            <h2>You Might Also Consider</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default BizPage;
