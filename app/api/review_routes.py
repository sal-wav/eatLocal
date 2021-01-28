from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review
from app.models import Business
from ..forms.review_form import ReviewForm
from app.models.db import db

review_routes = Blueprint('review', __name__)


@review_routes.route('/', methods=['GET'])
def reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}

# @review_routes.route('/<int:id>', methods=['GET'])
# def review_by_id(id):
#     review = Review.query.get(id)
#     return review.to_dict()

@review_routes.route('/biz/<int:id>', methods=['POST'])
def reviews_by_biz(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            stars=form.data['stars'],
            comment=form.data['comment'],
            user_id=current_user.id,
            business_id=id
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()


@review_routes.route('/<int:id>', methods=['GET', 'POST', 'DELETE'])
def review_by_id(id):
    review = Review.query.get(id)
    if request.method == 'GET':
        return review.to_dict()
    if request.method == 'DELETE':
        db.session.delete(review)
        db.session.commit()
        return {'message': 'Review has been deleted.'}
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review.stars=form.data['stars'],
        review.comment=form.data['comment'],
        user_id=current_user.id

        db.session.commit()
        return review.to_dict()
