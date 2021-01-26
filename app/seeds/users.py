from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demouser = User(username='Demo User', email='demouser@aa.io', password='password')
    bryce = User(username='Bryce', email='bryce@aa.io', password='password')
    user3 = User(username='Jane Doe', email='jane@aa.io', password='password')
    user4 = User(username='Alice Lim', email='alice@aa.io', password='password')
    user5 = User(username='Brandon Smith', email='brandon@aa.io', password='password')
    user6 = User(username='Kelly Rivers', email='kelly@aa.io', password='password')
    user7 = User(username='Joe Ellis', email='joe@aa.io', password='password')
    user8 = User(username='Tom Piddle', email='tom@aa.io', password='password')
    user9 = User(username='Jared Jakes', email='jared@aa.io', password='password')
    user10 = User(username='Emily Flowers', email='emily@aa.io', password='password')
    user11 = User(username='Candy Land', email='candy@aa.io', password='password')
    user12 = User(username='Dan Witz', email='dan@aa.io', password='password')

    db.session.add(demouser)
    db.session.add(bryce)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.add(user12)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
