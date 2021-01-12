from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Food

class FoodForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description')
    image_url = StringField('image_url')
    business_id = IntegerField('business_id', validators=[DataRequired()])
