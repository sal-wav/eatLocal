# eatLocal
[live link](https://eat-local-app.herokuapp.com/)
### Overview
eat Local is a yelp clone, targetted at independent restaurants and markets, so they can receive exposure through community reviews. eat Local uses React, Flask, PostgreSQL, SQLAlchemy, and CSS.
![eatLocalLanding](https://user-images.githubusercontent.com/69014609/107084983-cec27200-67c5-11eb-94fc-f4678d1badfd.png)

### Features

User Authentication

* Users can securely create an account using our login and logout feature. eat Local uses hash passwords so that no plain text passwords are ever stored in the database. Certain routes also require user authenication for pages to be accessed

![elAuth (1)](https://user-images.githubusercontent.com/69014609/107085502-966f6380-67c6-11eb-9467-614e416462dc.gif)

Businesses

* Add business with categories and features

![elBizForm](https://user-images.githubusercontent.com/69014609/107085976-4ba21b80-67c7-11eb-8941-e8d1f79bfc41.gif)

Food Items

* Add, edit, delete food items to your business' menu

![elFood](https://user-images.githubusercontent.com/69014609/107086558-2f52ae80-67c8-11eb-9948-8b0787b5e7a5.gif)

Reviews

* Add, edit, delete reviews on businesses

![elReview](https://user-images.githubusercontent.com/69014609/107086778-7640a400-67c8-11eb-93b5-ee9c25c2a8cb.gif)

Search Results

* Search for food items or business name

![elSearch](https://user-images.githubusercontent.com/69014609/107087085-ea7b4780-67c8-11eb-8794-12349cedf5ad.gif)

**In Progress**
* User Page

* Featured feed - biz preview: img, biz name, overall rating, description

* Activity feed - review preview: user, rating, review, posted/edited date
