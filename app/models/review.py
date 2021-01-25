from .db import db
from ..models.user import User
from ..models.business import Business
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    stars = db.Column(db.Integer, nullable = False)
    comment = db.Column(db.String(255))
    timestamp = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))

    user = db.relationship('User', back_populates='reviews')
    reviewedBusiness = db.relationship('Business', back_populates='reviews')


    def to_dict(self):
      return {
        "id": self.id,
        "stars": self.stars,
        "comment": self.comment,
        "timestamp": self.timestamp,
        "user_id": self.user_id,
        "business_id": self.business_id,
        "user": self.user.to_dict()
      }
