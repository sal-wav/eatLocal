from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Food

food_routes = Blueprint('food', __name__)


@food_routes.route('/')
