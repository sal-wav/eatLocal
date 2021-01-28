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
                        <div class="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>
                            {/* <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span>
                            <span className="starBtn"><i class="fas fa-star"></i></span> */}
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
