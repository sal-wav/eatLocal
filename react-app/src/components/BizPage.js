import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { bizInfo } from '../services/categoryFeature';
import "./styles/bizPage.css";

const BizPage = (props) => {
    const { currentUser } = props;
    const { bizId } = useParams();
    const [features, setFeatures] = useState([]);
    const [categories, setCategories] = useState([]);
    const [biz, setBiz] = useState(null);
    const [food, setFood] = useState([]);


    const menu = ['taco', 'torta', 'flautas', 'burrito', 'chips', 'salsa', 'guac', 'huevos rancheros',]



    useEffect(() => {
        (async () => {
            const response = await bizInfo(bizId);
            setBiz(response.biz);
            console.log(`bizfeat: ${JSON.stringify(response.features)}`)
            console.log(`bizcat: ${JSON.stringify(response.categories)}`)
            setFeatures(response.features);
            setFood(response.food);
            setCategories(response.categories);

            // console.log(`food: ${JSON.stringify(response.food)}`)
        })();
    }, [bizId]);

    if (!biz || !features) return 'loading';

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
                        {categories.map((category) => (
                            <div key={category.id}>
                                <p>{category.name}</p>
                            </div>
                        ))}
                        <h1>What's on the menu</h1>
                        { currentUser.id === biz.user_id ?
                        <NavLink to={`/foodform/biz/${bizId}`}>Add menu items</NavLink>
                        : null
                        }
                        <div className="menuContainer">
                            {/* <div> */}
                            {menu.map((menuItem) => (
                                <div className="itemContainer" key={menuItem}>
                                    { currentUser.id === biz.user_id ?
                                    <button type="button">Edit</button>
                                    : null
                                    }
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
