from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Food

food_routes = Blueprint('food', __name__)


@food_routes.route('/')
def all_food():
    food = Food.query.all()
    return {"food": [food.to_dict() for item in food]}

@food_routes.route('/biz/<int:business_id>')
def biz_menu(business_id):
    food = Food.query.filter_by(business_id)
    return {"food": [food.to_dict() for item in food]}

# @food_routes.route('/')
# def biz_by_food():
