from .db import db
from ..models.user import User
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

associations = db.Table(
    "associations",
    db.Model.metadata,
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id')),
    db.Column('business_id', db.Integer, db.ForeignKey('businesses.id'))
)

biz_features = db.Table(
    "biz_features",
    db.Model.metadata,
    db.Column('feature_id', db.Integer, db.ForeignKey('features.id')),
    db.Column('business_id', db.Integer, db.ForeignKey('businesses.id'))
)

class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable = False, unique = True)
    image_url = db.Column(db.String)
    phone_num = db.Column(db.String(10), nullable = False)
    description = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    owner = db.relationship('User', back_populates='ownedBusinesses')
    categories = db.relationship('Category', secondary=associations)
    features = db.relationship('Feature', secondary=biz_features)
    food = db.relationship('Food', back_populates='business')


    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "image_url": self.image_url,
        "phone_num": self.phone_num,
        "description": self.description,
        "user_id": self.user_id,
        # "owner": self.owner.to_dict()
      }
