from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Business

class BizForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    image_url = StringField('image_url')
    phone_num = StringField('phone_num', validators=[DataRequired()])
    description = StringField('description')
    opening_hour = IntegerField('opening_hour')
    opening_min = IntegerField('opening_min')
    closing_hour = IntegerField('closing_hour')
    closing_min = IntegerField('closing_min')
