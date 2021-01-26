from app.models import db

def seed_reviews():

    review1 = Review(stars=5, comment="I really like this place. Five stars!!", user_id=3, business_id=1)
    review2 = Review(stars=5, comment="Can't complain.", user_id=4, business_id=1)
    review3 = Review(stars=4, comment="Pretty good, but not the best.", user_id=5, business_id=1)
    review4 = Review(stars=5, comment="Been coming here for about a year now. Glad I found this place.", user_id=7, business_id=1)
    review5 = Review(stars=4, comment="yum", user_id=8, business_id=1)
    review6 = Review(stars=5, comment="Check this restaurant out if you're in the neighborhood! You won't regret it.", user_id=9, business_id=1)
    review7 = Review(stars=5, comment="I ordered delivery, and the food was cold by the time it got here, but it was really cold outside, so maybe that contributed. I'm not sure. It tasted good. I popped it in the microwave. Maybe, I will pick up next time.", user_id=10, business_id=1)
    review8 = Review(stars=5, comment="Really good", user_id=11, business_id=1)
    review9 = Review(stars=5, comment="Everytime I eat here, it's good. reliable!", user_id=6, business_id=1)
    review10 = Review(stars=5, comment="I order lunch here every other week.", user_id=12, business_id=1)
    review11 = Review(stars=5, comment="good", user_id=3, business_id=2)
    review12 = Review(stars=5, comment="Got what I ordered.", user_id=5, business_id=2)
    review13 = Review(stars=4, comment="Food is good, but the portions are small. I wish I got more good.", user_id=6, business_id=2)
    review14 = Review(stars=3, comment="People are right about the price vs portions. This place is ok", user_id=8, business_id=2)
    review15 = Review(stars=3, comment="Small portions for the price.", user_id=7, business_id=2)
    review16 = Review(stars=3, comment="It was good, but I've had better.", user_id=4, business_id=2)
    review17 = Review(stars=5, comment="Ordered this for my family. Everyone liked it.", user_id=7, business_id=2)
    review18 = Review(stars=5, comment="Five stars!!", user_id=6, business_id=3)
    review19 = Review(stars=4, comment="First time trying this restaurant. Pretty good.", user_id=10, business_id=3)
    review20 = Review(stars=4, comment="yum. I'm gonna try something else next time.", user_id=12, business_id=3)
    review21 = Review(stars=4, comment="healthy", user_id=4, business_id=3)
    review22 = Review(stars=5, comment="Five stars!!", user_id=9, business_id=4)
    review23 = Review(stars=5, comment="Love this place", user_id=11, business_id=4)
    review24 = Review(stars=5, comment="The cashier knows my order bc I come in so often.", user_id=5, business_id=5)
    review25 = Review(stars=5, comment="Can't complain", user_id=10, business_id=4)
    review26 = Review(stars=4, comment="pretty good", user_id=8, business_id=4)
    review27 = Review(stars=2, comment="Thought it was bland .......", user_id=7, business_id=5)
    review28 = Review(stars=4, comment="Not bad", user_id=4, business_id=5)
    review29 = Review(stars=3, comment="Casual spot. food is ok.", user_id=5, business_id=5)
    review30 = Review(stars=3, comment="it's ok ...", user_id=11, business_id=5)
    review31 = Review(stars=5, comment="Support this place!", user_id=12, business_id=6)
    review32 = Review(stars=5, comment="Staff is really nice.", user_id=3, business_id=6)
    review33 = Review(stars=4, comment="Food is good, but the price makes it worth it over other places. so cheap", user_id=5, business_id=6)
    review34 = Review(stars=4, comment="They have a lot of stuff here.", user_id=9, business_id=6)
    review35 = Review(stars=5, comment=":)", user_id=11, business_id=6)
    review36 = Review(stars=5, comment="Love this place", user_id=3, business_id=7)
    review37 = Review(stars=4, comment="Makes my stomach feel bad, but in a good way", user_id=10, business_id=7)
    review38 = Review(stars=4, comment="Guilty pleasure", user_id=9, business_id=7)
    review39 = Review(stars=3, comment="Wait is forever", user_id=12, business_id=7)
    review40 = Review(stars=5, comment="My go-to", user_id=6, business_id=8)
    review41 = Review(stars=5, comment="so so good", user_id=3, business_id=8)
    review42 = Review(stars=5, comment="My family loves this place", user_id=7, business_id=8)
    review43 = Review(stars=5, comment="Five stars!!", user_id=3, business_id=2)
    review44 = Review(stars=4, comment="It was good", user_id=5, business_id=9)
    review45 = Review(stars=4, comment="yum", user_id=6, business_id=9)
    review46 = Review(stars=4, comment="Really like this place", user_id=8, business_id=10)
    review47 = Review(stars=5, comment="staff is nice, and food tastes good", user_id=9, business_id=10)
    review48 = Review(stars=2, comment="Not a fan", user_id=12, business_id=11)
    review49 = Review(stars=4, comment="good", user_id=11, business_id=11)
    review50 = Review(stars=4, comment="not bad", user_id=10, business_id=11)
    review51 = Review(stars=3, comment="It was good, but I will try somewhere else next time.", user_id=9, business_id=11)
    review52 = Review(stars=3, comment="decent. that's about it", user_id=9, business_id=11)
    review53 = Review(stars=3, comment="could be better, but overall ok", user_id=8, business_id=11)
    review54 = Review(stars=4, comment="idk why the reviews are bad. I think it was fine.", user_id=7, business_id=11)
    review55 = Review(stars=5, comment="This place has been around forever. If you haven't, check it out.", user_id=3, business_id=12)
    review56 = Review(stars=4, comment="ya get what you pay for", user_id=4, business_id=12)
    review57 = Review(stars=5, comment="Menu is pretty big, and the staff is easy to talk to.", user_id=5, business_id=12)
    review58 = Review(stars=4, comment="Quick stop when I'm too busy to cook", user_id=9, business_id=12)
    review59 = Review(stars=4, comment="good", user_id=10, business_id=12)
    review60 = Review(stars=5, comment="hidden gem", user_id=6, business_id=12)
    review61 = Review(stars=5, comment="I recommend this to anyone in the area.", user_id=8, business_id=12)
    review62 = Review(stars=4, comment="I stop by all the time.", user_id=7, business_id=12)
    review63 = Review(stars=5, comment="good service and food", user_id=11, business_id=12)


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    db.session.add(review48)
    db.session.add(review49)
    db.session.add(review50)
    db.session.add(review51)
    db.session.add(review52)
    db.session.add(review53)
    db.session.add(review54)
    db.session.add(review55)
    db.session.add(review56)
    db.session.add(review57)
    db.session.add(review58)
    db.session.add(review59)
    db.session.add(review60)
    db.session.add(review61)
    db.session.add(review62)
    db.session.add(review63)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()
