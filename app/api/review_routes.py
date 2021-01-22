from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review
from app.models import Business
# from ..forms.review_form import ReviewForm
from app.models.db import db

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/', methods=['GET'])
def reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}

@review_routes.route('/biz/<int:id>', methods=['POST', 'DELETE'])
def reviews_by_biz(id):
    # form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            stars=form.data['stars'],
            comment=form.data['comment'],
            # timestamp=form.data['timestamp'],
            user_id=form.data['user_id'],
            business_id=form.data['business_id']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()