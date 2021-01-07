from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Business
from app.models import Category

category_routes = Blueprint('category', __name__)


@category_routes.route('/', methods=['GET'])
def categories():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}
