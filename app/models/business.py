from .db import db
from ..models.user import User
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(40), nullable = False, unique = True)
    image_url = db.Column(db.String)
    phone_num = db.Column(db.String(10), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    user = db.relationship("User")
    category = db.relationship("Category")

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "image_url": self.image_url,
        "phone_num": self.phone_num,
        "user_id": self.user_id,
        "category_id": self.category_id
      }
