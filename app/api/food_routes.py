from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Food
from app.models import Business
from ..forms.food_form import FoodForm
from app.models.db import db

food_routes = Blueprint('food', __name__)


@food_routes.route('/')
def all_food():
    food = Food.query.all()
    return {"food": [food.to_dict() for item in food]}

@food_routes.route('/biz/<int:id>', methods=['GET', 'POST'])
def biz_menu(id):
    if request.method == 'GET':
        food = Food.query.filter_by(id)
        return {"food": [food.to_dict() for item in food]}
    form = FoodForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        food_item = Food(
            name=form.data['name'],
            description=form.data['description'],
            image_url=form.data['image_url'],
            business_id=form.data['business_id']
        )
        db.session.add(food_item)
        db.session.commit()
        return food_item.to_dict()
