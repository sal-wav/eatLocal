from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Business
from app.models import Feature

feature_routes = Blueprint('feature', __name__)


@feature_routes.route('/', methods=['GET'])
def features():
    features = Feature.query.all()
    return {"features": [feature.to_dict() for feature in features]}
