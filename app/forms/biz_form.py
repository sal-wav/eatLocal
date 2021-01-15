from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Business

def biz_exists(form, field):
    print("Checking if business exits", field.data)
    name = field.data
    biz = Business.query.filter(Business.name == name).first()
    if biz:
        raise ValidationError("Business is already registered.")

class BizForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), biz_exists])
    image_url = StringField('image_url')
    phone_num = StringField('phone_num', validators=[DataRequired()])
    description = StringField('description')
    opening_hour = IntegerField('opening_hour')
    opening_min = IntegerField('opening_min')
    closing_hour = IntegerField('closing_hour')
    closing_min = IntegerField('closing_min')
