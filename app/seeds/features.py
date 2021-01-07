# from app.models import db, Feature

# def seed_features():

#     feat1 = Feature(name='Takeout')
#     feat2 = Feature(name='Delivery')
#     feat3 = Feature(name='Outdoor Seating')

#     db.session.add(feat1)
#     db.session.add(feat2)
#     db.session.add(feat3)

#     db.session.commit()

# def undo_features():
#     db.session.execute('TRUNCATE features;')
#     db.session.commit()
