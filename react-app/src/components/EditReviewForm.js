import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { bizInfo } from "../services/categoryFeature";
import { getReview, editReview } from "../services/biz";
import "./styles/form.css";

const EditReviewForm = () => {
    const {reviewId} = useParams();
    // const {bizId} = useParams();
    const [bizId, setBizId] = useState(null);
    const [biz, setBiz] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [ratingClass, setRatingClass] = useState("starBtn");
    const [redirect, setRedirect] = useState("")

    const nums = [1, 2, 3, 4, 5];

    useEffect(() => {
        (async () => {

            const reviewRes = await getReview(reviewId);
            setSelectedRating(reviewRes.stars);
            setHoverRating(reviewRes.stars);
            setComment(reviewRes.comment);
            setBizId(reviewRes.business_id);

            // const response = await bizInfo(bizId);
            // setBiz(response.biz);
            // setReviews(response.reviews);
        })();
    }, [reviewId]);

    useEffect(() => {
        if (hoverRating === 0) {
            setRatingClass("starBtn")
        } else if (hoverRating === 1) {
            setRatingClass("oneStar starBtn")
        } else if (hoverRating === 2) {
            setRatingClass("twoStar starBtn")
        } else if (hoverRating === 3) {
            setRatingClass("threeStar starBtn")
        } else if (hoverRating === 4) {
            setRatingClass("fourStar starBtn")
        } else if (hoverRating === 5) {
            setRatingClass("fiveStar starBtn")
        };
    }, [hoverRating])

    const handleSelectedRating = (n) => {
        setSelectedRating(n);
    };

    const handleRatingHover = (n) => {
        setHoverRating(n);
    };

    const handleHoverLeave = () => {
        setHoverRating(selectedRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedRating === 0) alert("Please select a rating");
        await editReview(selectedRating, comment, bizId, reviewId);
        setRedirect(`/biz/${bizId}`);
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return selectedRating && (
        <div className="authPage container">
            <div className="authFormContainer container">
                <div>
                    <form className="reviewForm" onSubmit={handleSubmit}>
                        {/* <h1>{biz.name}</h1> */}
                        <div>
                            <div className="rate container" onMouseLeave={handleHoverLeave}>
                                {nums.map(n => (
                                    <div onMouseOver={() => handleRatingHover(n)} onClick={() => handleSelectedRating(n)} className={hoverRating >= n ? ratingClass : "starBtn"}><i className="fas fa-star fa-2x"></i></div>
                                ))}
                                <h3>Select your rating</h3>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="reviewInput" required></textarea>
                            </div>
                        </div>
                        <div id="foodFormBtns">
                            <NavLink className="navLink navbarLink" to={`/biz/${bizId}`}>Cancel</NavLink>
                            <button className="btn" type="submit">Post Review</button>
                        </div>
                    </form>
                </div>
                <div>
                    {/* reviews sidebar */}
                </div>
            </div>
        </div>
    );
}

export default EditReviewForm
