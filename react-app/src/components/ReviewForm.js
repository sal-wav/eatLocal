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
                    <textarea id="reviewTextArea" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="This spot is serving meal kits, as well as offering delivery during COVID. I'm so glad! Of course nothing beats the in-person experience, but delivery is a great second option right now. The food was a little cold, but I understand this is a new operation for them..." required></textarea>
                </div>
                <button className="btn" type="submit">Post Review</button>
            </form>
            <div>
                {/* reviews sidebar */}
            </div>
        </div>
    );
}

export default ReviewForm
