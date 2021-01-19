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

@food_routes.route('/<int:id>/', methods=['GET', 'POST', 'DELETE'])
def food_by_id(id):
    food = Food.query.get(id)
    if request.method == 'GET':
        return {"food": food.to_dict()}
    if request.method == 'DELETE':
        db.session.delete(food)
        db.session.commit()
        return {'message': 'Item has been deleted'}
    form = FoodForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        food.name=form.data['name'],
        food.description=form.data['description'],
        food.image_url=form.data['image_url'],
        food.business_id=form.data['business_id']
        # db.session.add(food)
        db.session.commit()
        return food.to_dict()

@food_routes.route('/biz/<int:id>/', methods=['GET', 'POST'])
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
