Amazon clone using (REACT, EXPRESS.JS, MySQL, NodeJS)
=====================================================


short Description
------------------

### Front-end
<p>Built an amazon clone built front-end with React, using Context apis and redux to manage our app's state </p>

### Back-end
<p> Used Node to provide the backend environment for the app and Express to handle requests, controllers and models </p>


### DataBase
<p> Used MySQL for storing data such as product informations, user informations, ... </p>

---

## Goals

    1. ~~MySQL Data modeling~~ 
    2. ~~Build a _REST_ api with express~~ 
    3. ~~Seperate Express Server, React front end and MySql DB~~
    4. ~~Use context APIS and redux for app's state~~ 
    5. use a RealTime solution to handle user comments, Messages and Landing page statistics 
    6. Add a payment method to enable checkout 
    7. deploy to **Heroku**

---

## Use the app 

### Install

`git clone https://github.com/mo-hunter123/amazon-clone`
`cd amazon-clone`
`npm install`

### Run the app 

#### front-end 

`npm start`

#### back-end 

`cd amazon-backend`
`nodemon app.js`

#### DataBase 

`cd amazon-backend/models`

then you can import the `requests.sql` file to your local MySQL database 

    