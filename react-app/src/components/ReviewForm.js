import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { bizInfo } from "../services/categoryFeature";
import { postReview } from "../services/biz";
import "./styles/form.css";

const ReviewForm = () => {
    const {bizId} = useParams();
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
            const response = await bizInfo(bizId);
            setBiz(response.biz);
            setReviews(response.reviews);
        })();
    }, [bizId]);

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
        await postReview(selectedRating, comment, parseInt(bizId));
        setRedirect(`/biz/${bizId}`);
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return biz && (
        <div>
            <div>
                <div>
                    <form className="reviewForm" onSubmit={handleSubmit}>
                        <h1>{biz.name}</h1>
                        <div>
                            <div className="container" onMouseLeave={handleHoverLeave}>
                                {nums.map(n => (
                                    <div onMouseOver={() => handleRatingHover(n)} onClick={() => handleSelectedRating(n)} className={hoverRating >= n ? `star${hoverRating} starBtn star` : "starBtn star"}><i className="fas fa-star fa-2x"></i></div>
                                ))}
                                <h3>Select your rating</h3>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="reviewInput" required></textarea>
                            </div>
                        </div>
                        <button className="btn" type="submit">Post Review</button>
                    </form>
                </div>
                <div>
                    {/* reviews sidebar */}
                </div>
            </div>
        </div>
    );
}

export default ReviewForm
