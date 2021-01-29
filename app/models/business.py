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
    phone_num = db.Column(db.String(12), nullable = False)
    description = db.Column(db.String(255))
    opening_hour = db.Column(db.Integer)
    opening_min = db.Column(db.Integer)
    closing_hour = db.Column(db.Integer)
    closing_min = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    owner = db.relationship('User', back_populates='ownedBusinesses')
    categories = db.relationship('Category', secondary=associations)
    features = db.relationship('Feature', secondary=biz_features)
    food = db.relationship('Food', back_populates='business')
    reviews = db.relationship('Review', back_populates='reviewedBusiness')

    def avg_rating(self):
      ratings = [review.stars for review in self.reviews]
      return sum(ratings) / len(ratings)

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "image_url": self.image_url,
        "phone_num": self.phone_num,
        "description": self.description,
        "opening_hour": self.opening_hour,
        "opening_min": self.opening_min,
        "closing_hour": self.closing_hour,
        "closing_min": self.closing_min,
        "user_id": self.user_id,
        "review_count": len(self.reviews)
      }
