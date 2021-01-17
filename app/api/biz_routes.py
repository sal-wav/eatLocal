from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Business
from app.models import Category
from app.models import Feature
from app.models import Food
from ..forms.biz_form import BizForm
from app.models.db import db

biz_routes = Blueprint('biz', __name__)


@biz_routes.route('/', methods=['GET'])
def businesses():
    businesses = Business.query.all()
    return {"biz": [biz.to_dict() for biz in businesses]}

@biz_routes.route('/', methods=["POST"])
@login_required
def post_biz():
    form = BizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # categories = list(map(Category.query.filter_by().first(), request.json['categoryIds']))
        # features = list(map(Feature.query.filter_by().first(), request.json['featureIds']))
        biz = Business(
            name=form.data['name'],
            image_url=form.data['image_url'],
            phone_num=form.data['phone_num'],
            description=form.data['description'],
            user_id=current_user.id
        )
        for id in request.json['categoryIds']:
            category = Category.query.get(id)
            biz.categories.append(category)
        for id in request.json['featureIds']:
            feature = Feature.query.get(id)
            biz.features.append(feature)
        # biz.categories = categories
        # biz.features = features
        db.session.add(biz)
        db.session.commit()
        return biz.to_dict()
    return {'errors': form.errors}, 422

@biz_routes.route('/<int:id>', methods=["GET", "POST", "DELETE"])
@login_required
def biz(id):
    biz = Business.query.get(id)
    if request.method == 'GET':
        return biz.to_dict()
    form = BizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if request.method == 'DELETE':
        db.session.delete(biz)
        db.session.commit()
        return {'message': 'Biz has been deleted'}
    if biz.user_id == current_user.id:
        if form.validate_on_submit():
            biz = Business(
                name=form.data['name'],
                image_url=form.data['image_url'],
                phone_num=form.data['phone_num'],
                user_id=current_user.id,
                category_id=form.data['category_id']
            )
            db.session.add(biz)
            db.session.commit()
            return biz.to_dict()
        return {'errors': form.errors}, 422
    return {'errors': 'Only the owner can delete this biz.'}, 401

@biz_routes.route('/search/<term>', methods=["GET"])
def biz_by_search(term):
    biz_by_name = Business.query.filter(Business.name.ilike(f'%{term}%')).all()
    results = [biz.to_dict() for biz in biz_by_name]
    food = Food.query.filter(Food.name.ilike(f'%{term}%')).all()
    for item in food:
        id = item.business_id
        biz = Business.query.get(id)
        if biz not in results:
            results.append(biz.to_dict())
    print(results)
    return {'results': results}
