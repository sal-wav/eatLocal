import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { bizInfo } from "../services/categoryFeature";
import "./styles/form.css";

const ReviewForm = () => {
    const {bizId} = useParams();
    const [biz, setBiz] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(null);

    // CHECK REVIEWS RESPONSE

    useEffect(() => {
        (async () => {
            const response = await bizInfo(bizId);
            setBiz(response.biz);
            setReviews(response.reviews);
        })();
    }, [bizId])

    return biz && (
        <div>
            <div>
                <div>
                    <form>
                        <h1>{biz.name}</h1>
                        <div>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <h3></h3>
                            <textarea className="reviewInput"></textarea>
                        </div>
                        <button className="btn"type="submit">Post Review</button>
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
