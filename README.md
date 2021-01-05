# EatLocal

### Overview

### Features

User Authentication

Log In, Sign Up

Businesses

Food Items

Reviews

### All pages
navbar: home, log in, sign up, "share your biz" button, (**bonus** write a review)
    * search bar: "find" input, search button

footer: github/linkedIn links

### Splash/Home
GET first 3 biz - /api/biz
GET 3 recent reviews - /api/review
GET user - /api/user/userId (use review FK userId)

* Featured feed: preview includes: img, biz name, overall rating, description

Recent Activity: Username "posted a review", img, biz name, rating (**bonus** comment)

### Search Results
GET biz - /api/biz
GET review - /api/

Sidebar: filters: restaurant or corner store button, "open now" checkbox, rating

(**bonus** Sort dropdown: sort by highest rating, most ratings)

* Featured feed: preview includes: img, biz name, overall rating, description

### Biz Page
GET biz - /api/biz/bizId
GET reviews - /api/review/biz/bizId
GET user - /api/user/userId
PATCH review - /api/review/reviewId
POST review - /api/review

Cover: img, biz name, overall rating, hours open, description

Owner details: img, username

"Post a review" button
    * select number of starts, "post" button

Food List: food img, name, description

* Review List: user img, name, rating
    * Edit button if user created review

### Biz form
POST biz - /api/biz
PATCH biz - /api/biz/bizId
POST food - /api/food

Biz Form: name, description, image, phone number
    * food input: name, description, image

**bonus**
(### User Page
GET user - /api/user/userId
GET owned biz - /api/biz/user/userId
GET posted reviews - /api/review/user/userId

Cover: img, username, number of reviews posted

* Review List: user img, name, rating
    * Edit button if user created review
    * if user page: show biz name

* Featured feed: preview includes: img, biz name, overall rating, description
    * just shows biz owned by user)
