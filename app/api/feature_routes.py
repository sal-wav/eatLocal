from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Business
from app.models import Feature

feature_routes = Blueprint('feature', __name__)


@feature_routes.route('/', methods=['GET'])
def features():
    features = Feature.query.all()
    return {"features": [feature.to_dict() for feature in features]}


# GET biz, features, food, categories
@feature_routes.route('/biz/<int:bizId>', methods=['GET'])
def biz_features(bizId):
    biz = Business.query.get(bizId)
    return  {"biz": biz.to_dict(), "features": [feature.to_dict() for feature in biz.features], "food": [food_item.to_dict() for food_item in biz.food], "categories": [category.to_dict() for category in biz.categories], "review": [category.to_dict() for review in biz.reviews]}
