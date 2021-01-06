from .db import db
from ..models.business import Business
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class Food(db.Model):
    __tablename__ = 'food'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable = False)
    description = db.Column(db.String(255))
    image_url = db.Column(db.String)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name,
        "description": self.description,
        "image_url": self.timestamp,
        "business_id": self.business_id
        }
