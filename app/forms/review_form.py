from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, DateTimeField
from wtforms.validators import DataRequired, ValidationError
from app.models import Review

class ReviewForm(FlaskForm):
    stars = IntegerField('stars', validators=[DataRequired()])
    comment = StringField('comment')
    timestamp = DateTimeField('timestamp')
    user_id = IntegerField('user_id')
    business_id = IntegerField('business_id', validators=[DataRequired()])
