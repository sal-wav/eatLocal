import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { bizInfo } from '../services/categoryFeature';
import { deleteFood, deleteReview } from '../services/biz';
import "./styles/bizPage.css";

const BizPage = (props) => {
    const history = useHistory();
    const { currentUser } = props;
    const { bizId } = useParams();
    const [avgRating, setAvgRating] = useState(null);
    const [features, setFeatures] = useState(null);
    const [categories, setCategories] = useState([]);
    const [biz, setBiz] = useState(null);
    const [food, setFood] = useState([]);
    const [reviews, setReviews] = useState([]);

    const [deleting, setDeleting] = useState(false);
    const nums = [1, 2, 3, 4, 5];

    useEffect(() => {
        (async () => {
            const response = await bizInfo(bizId);
            setBiz(response.biz);
            setFeatures(response.features);
            setFood(response.food);
            setReviews(response.reviews);
            setAvgRating(response.avg_rating);
            let catList = [];
            response.categories.map(category =>
                catList.push(category.name))
            setCategories(catList);
            setDeleting(false);

            console.log(`avg rating: ${JSON.stringify(response.avg_rating)}`)
        })();
    }, [bizId, deleting]);

    const handleEditFood = (e) => {
        history.push(`/foodform/biz/${bizId}/food/${e.currentTarget.value}`)
    }

    const handleDeleteFood = async (e) => {
        await deleteFood(e.currentTarget.value);
        setDeleting(true)
    }

    const handleEditReview = (e) => {
        history.push(`/reviewform/biz/${bizId}/review/${e.currentTarget.value}`)
    }

    const handleDeleteReview = async (e) => {
        await deleteReview(e.currentTarget.value);
        setDeleting(true)
    }

    if (!biz || !features) return 'loading';

    return (!biz || !features) ? 'loading' : (

            <div className="pageContainer">
                <div className="photoHeader">
                    <div className="photos container">
                        <img className='coverImg' src={biz.image_url}></img>
                        <img className='coverImg' src={biz.image_url}></img>
                        <img className='coverImg' src={biz.image_url}></img>
                    </div>
                    <div className="aboutContainer container">
                        <div className="about container">
                            <h1 id="bizpageHead">{biz.name}</h1>
                            <div className="totalReviews container">
                                {nums.map(n => (
                                    <div className={n <= avgRating ? `star${Math.round(avgRating)} medStar star` : "zeroStar medStar star"}><i className="fas fa-star fa-med"></i></div>
                                ))}
                                <h3>{biz.review_count} reviews</h3>
                            </div>
                            <div className="container">
                                <p className="categories">{categories.join(", ")}</p>
                            </div>
                            <h3>{`${biz.opening_hour}:${biz.opening_min} - ${biz.closing_hour}:${biz.closing_min}`}</h3>
                        </div>
                    </div>
                </div>
                <div className="infoContainer container">
                    <div className="leftContainer">
                        <div className="sectionBorder">
                            <h2 id="covid">COVID-19 Updates</h2>
                            <h3 id="services">Updated Services</h3>
                            <div className="featContainer container">
                                {features.map((feature) => (
                                    <div className="feat container" key={feature.id}>
                                        <i className="fas fa-check"></i>
                                        <p>{feature.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="menuHead" className="container sectionBorder">
                            <h1>What's on the menu</h1>
                            { currentUser.id === biz.user_id ?
                            <>
                                <NavLink id="addMenuBtn" className="navLink navbarLink" to={`/foodform/biz/${bizId}`}>Add menu items <i className="far fa-edit"></i></NavLink>
                            </>
                            : null }
                        </div>
                        <div className="menuContainer container">
                            {food.map((foodItem) => (
                                <div className="itemContainer card" key={foodItem.id}>
                                    <div>
                                        { currentUser.id === biz.user_id ?
                                        <div className="container">
                                            <button className="btn foodBtn" type="button" value={foodItem.id} onClick={handleEditFood}><i className="far fa-edit"></i></button>
                                            <button className="trash btn foodBtn" type="button" value={foodItem.id} onClick={handleDeleteFood}><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                        : null
                                        }
                                        <h3 className="foodName">{foodItem.name}</h3>
                                    </div>
                                    <div className="foodIconContainer container">
                                        <i className="fas fa-utensils fa-4x"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div id="reviewHead" className="container sectionBorder">
                            <h1>Reviews</h1>

                        </div>
                        <div className="startReviewContainer">
                            <div id='currentUserContainer'><i className="fas fa-user-circle fa-4x"></i></div>
                            <h3 className="reviewUser">{currentUser.username}</h3>
                            <div>
                                <NavLink className="navLink reviewLink" to={`/reviewform/biz/${bizId}`}>Start your review of {biz.name}</NavLink>
                            </div>
                        </div>
                        <div className="reviewsContainer container">
                            {reviews.map((review) => (
                                <div className="container">
                                    <div className="review sectionBorder" key={review.id}>
                                        <div className="reviewHead container">
                                            <div className="container">
                                                <span><i className="fas fa-user-circle fa-4x"></i></span>
                                                <h3 className="reviewUser">{review.user.username}</h3>
                                            </div>

                                            <div className="container">
                                                {nums.map(n => (
                                                    <div className={n <= review.stars ? `star${review.stars} smallStar star`: "zeroStar smallStar star"}><i className="fas fa-star fa-xs"></i></div>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="comment">{review.comment}</p>
                                    </div>
                                    { currentUser.id === review.user_id ?
                                    <div className="editReview container">
                                        <button className="btn foodBtn" type="button" value={review.id} onClick={handleEditReview}><i className="far fa-edit"></i></button>
                                        <button className="trash btn foodBtn" type="button" value={review.id} onClick={handleDeleteReview}><i className="far fa-fas fa-trash-alt"></i></button>
                                    </div>
                                    : null}
                                </div>
                            ))}
                        </div>

                    </div>


                    <div className="sidebarContainer">
                        <div className="sidebar">
                            <h3>{biz.name}</h3>
                            <div className="sectionBorder">
                                { biz.phone_num.length < 12 ?
                                <h3>{`(${biz.phone_num.slice(0, 3)}) ${biz.phone_num.slice(3, 6)}-${biz.phone_num.slice(6, 10)}`}</h3> :
                                <h3>{`(${biz.phone_num.slice(0, 3)}) ${biz.phone_num.slice(4)}`}</h3>
                                }
                            </div>
                            <div className="sectionBorder">
                                <h3 className="infoAboutHead">About</h3>
                                <p className="bizpageSmallText">{biz.description}</p>
                            </div>
                            <div className="sectionBorder">
                                <h3>{`${biz.opening_hour}:${biz.opening_min} - ${biz.closing_hour}:${biz.closing_min}`}</h3>
                            </div>
                        </div>
                        {/* <div>
                            <h2>You Might Also Consider</h2>

                        </div> */}
                    </div>
                </div>
            </div>

    );
}

export default BizPage;
