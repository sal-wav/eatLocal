from .db import db
from .business import biz_features
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.orm import relationship

class Feature(db.Model):
    __tablename__ = 'features'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable=False)

    businesses = db.relationship('Business', secondary=biz_features)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }
