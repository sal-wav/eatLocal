from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Business
from app.models import Feature

feature_routes = Blueprint('feature', __name__)


@feature_routes.route('/', methods=['GET'])
def features():
    features = Feature.query.all()
    return {"features": [feature.to_dict() for feature in features]}


# GET biz, features, food
@feature_routes.route('/biz/<int:bizId>', methods=['GET'])
def biz_features(bizId):
    biz = Business.query.get(bizId)
    return  {"biz": biz.to_dict(), "features": [feature.to_dict() for feature in biz.features], "food": [food.to_dict() for food in biz.food]}
