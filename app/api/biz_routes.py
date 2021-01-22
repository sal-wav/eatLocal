from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Business
from app.models import Category
from app.models import Feature
from app.models import Food
from ..forms.biz_form import BizForm
from app.models.db import db
from yelpapi import YelpAPI
import os
yelp_api = YelpAPI(os.environ.get("YELP_API_KEY"))

biz_routes = Blueprint('biz', __name__)

def yelp_test():
    response = yelp_api.search_query(term='convenience stores', longitude=-122.42058, latitude=37.80587, sort_by='rating', limit=15)
    print(response)

@biz_routes.route('/', methods=['GET'])
def businesses():
    # yelp_test()
    businesses = Business.query.all()
    return {"results": [{"biz": biz.to_dict(), "features": [feature.to_dict() for feature in biz.features]} for biz in businesses]}
    # return {"biz": [biz.to_dict() for biz in businesses]}

@biz_routes.route('/', methods=["POST"])
@login_required
def post_biz():
    form = BizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        biz = Business(
            name=form.data['name'],
            image_url=form.data['image_url'],
            phone_num=form.data['phone_num'],
            description=form.data['description'],
            opening_hour=form.data['opening_hour'],
            opening_min=form.data['opening_min'],
            closing_hour=form.data['closing_hour'],
            closing_min=form.data['closing_min'],
            user_id=current_user.id
        )
        for id in request.json['categoryIds']:
            category = Category.query.get(id)
            biz.categories.append(category)
        for id in request.json['featureIds']:
            feature = Feature.query.get(id)
            biz.features.append(feature)
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
    filtered_biz = Business.query.filter(Business.name.ilike(f'%{term}%')).all()
    biz_dict_list = [biz.to_dict() for biz in filtered_biz]
    print(f'first biz_dict_list: %{biz_dict_list}')
    results = [{'biz': biz.to_dict(), 'categories': [category.to_dict() for category in biz.categories], 'features': [feature.to_dict() for feature in biz.features]} for biz in filtered_biz]
    food = Food.query.filter(Food.name.ilike(f'%{term}%')).all()
    for item in food:
        id = item.business_id
        biz = Business.query.get(id)
        biz_dict = biz.to_dict()
        if biz_dict not in biz_dict_list:
            biz_dict_list.append(biz_dict)
            results.append({'biz': biz_dict, 'categories': [category.to_dict() for category in biz.categories], 'features': [feature.to_dict() for feature in biz.features]})
    print(results)
    return {'results': results}
