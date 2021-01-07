# from app.models import db, Category

# def seed_categories():

#     cat1 = Category(name='Breakfast')
#     cat2 = Category(name='Lunch')
#     cat3 = Category(name='Dinner')
#     cat4 = Category(name='Bakery')
#     cat5 = Category(name='Cafe')
#     cat6 = Category(name='American')
#     cat7 = Category(name='Asian')
#     cat8 = Category(name='Chinese')
#     cat9 = Category(name='Japanese')
#     cat10 = Category(name='Vietnamese')
#     cat11 = Category(name='Indian')
#     cat12 = Category(name='Thai')
#     cat13 = Category(name='Mexican')
#     cat14 = Category(name='Venezualan')
#     cat15 = Category(name='Mediterranean')
#     cat16 = Category(name='Italian')

#     db.session.add(cat1)
#     db.session.add(cat2)
#     db.session.add(cat3)
#     db.session.add(cat4)
#     db.session.add(cat5)
#     db.session.add(cat6)
#     db.session.add(cat7)
#     db.session.add(cat8)
#     db.session.add(cat9)
#     db.session.add(cat10)
#     db.session.add(cat11)
#     db.session.add(cat12)
#     db.session.add(cat13)
#     db.session.add(cat14)
#     db.session.add(cat15)
#     db.session.add(cat16)

#     db.session.commit()

# def undo_categories():
#     db.session.execute('TRUNCATE categories;')
#     db.session.commit()
