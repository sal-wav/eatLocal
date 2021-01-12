from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Food
from app.models import Business

# TO DO MAKE FOOD FORM BACKEND

food_routes = Blueprint('food', __name__)


@food_routes.route('/')
def all_food():
    food = Food.query.all()
    return {"food": [food.to_dict() for item in food]}

@food_routes.route('/biz/<int:business_id>', methods=['GET', 'POST'])
def biz_menu(business_id):
    if request.method == 'GET':
        food = Food.query.filter_by(business_id)
        return {"food": [food.to_dict() for item in food]}
    # form = FoodForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        food_item = Food(
            name=form.data['name'],
            description=form.data['description'],
            image_url=form.data['image_url'],
            business_id
        )
        db.session.add(food_item)
        db.session.commit()
        return food_item.to_dict()
