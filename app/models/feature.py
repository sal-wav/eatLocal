from .db import db
from ..models.business import Business
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class Feature(db.Model):
    __tablename__ = 'features'

    id = db.Column(db.Integer, primary_key = True)
    description = db.Column(db.String(255))

    takeout = db.Column(db.Boolean)
    delivery = db.Column(db.Boolean)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name,
        "description": self.description,
        "image_url": self.timestamp,
        "business_id": self.business_id
        }
