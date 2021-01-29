import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { bizInfo } from "../services/categoryFeature";
import { getReview, editReview } from "../services/biz";
import "./styles/form.css";

const EditReviewForm = () => {
    const {reviewId} = useParams();
    const [bizId, setBizId] = useState(null);
    const [biz, setBiz] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [redirect, setRedirect] = useState("")

    const nums = [1, 2, 3, 4, 5];

    useEffect(() => {
        (async () => {

            const reviewRes = await getReview(reviewId);
            setSelectedRating(reviewRes.stars);
            setHoverRating(reviewRes.stars);
            setComment(reviewRes.comment);
            setBizId(reviewRes.business_id);

            const bizRes = await bizInfo(reviewRes.business_id);
            setBiz(bizRes.biz);
            setReviews(bizRes.reviews);
        })();
    }, [reviewId]);

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
        await editReview(selectedRating, comment, reviewId);
        setRedirect(`/biz/${bizId}`);
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return biz && selectedRating && (
        <div className="pageContainer">
            <form id="reviewForm" onSubmit={handleSubmit}>
                <h1>{biz.name}</h1>
                <div className="reviewFormBorder">
                    <div className="formRating container" onMouseLeave={handleHoverLeave}>
                        {nums.map(n => (
                            <div key={n} onMouseOver={() => handleRatingHover(n)} onClick={() => handleSelectedRating(n)} className={hoverRating >= n ? `star${hoverRating} medStar star` : "zeroStar medStar star"}><i className="fas fa-star fa-med"></i></div>
                        ))}
                        <p className="grey">Select your rating</p>
                    </div>
                    <textarea id="reviewTextArea" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
                </div>
                <div id="foodFormBtns">
                    <NavLink className="navLink navbarLink" to={`/biz/${bizId}`}>Cancel</NavLink>
                    <button className="btn" type="submit">Post Review</button>
                </div>
            </form>
            {/* reviews sidebar */}
        </div>
    );
}

export default EditReviewForm
