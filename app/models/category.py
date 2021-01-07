from .db import db
from ..models.business import associations
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False, unique = True)

    businesses = db.relationship('Business', secondary=associations)

    # bakery.businesses.append(bobs_bakery)
    # takeout.businesses.append(bobs_bakery)

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name
      }
