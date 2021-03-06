
# Menagerie
Menagerie is currently undergoing expansion and is in need of an API to assist their front end devs. The API should provide information about the animals, their keepers, their trainers, and their respective tricks.

## About
This project uses test driven development(TDD) along with Knex and Bookshelf ORMs to work with the a Postgresql database. The project is deployed through Heroku to give other devs access to the data.

## Tech used
<img src="images/postgres.png" alt="postgres" width="200px">
<img src="images/bookshelf-icon.png" alt="bookshelf" width="200px">
<img src="images/knex.png" alt="knex" width="200px">
<img src="images/express.png" alt="express" width="200px">


## ERD
<img src="images/erd2.png">


# express-api-group-project
Creating an API for an existing Angular app

You'll need to knock the rust off of your Angular Fu for this one! For this project you must design, implement and deploy an API that the following front-end app can query to get, post, put, and delete data about zoo animals and their keepers.
https://github.com/C-Stein/mean-mongoose-zoo

### Requirements
+ TDD for each route
+ Knex and Bookshelf to build your schemas and models
+ Research and understand CORS and how to allow cross origin requests, then implement this npm package
  + https://www.npmjs.com/package/cors
+ Heroku to deploy your API
+ Update the URLs in the Angular app to correspond with the API endpoints

#### Stretch goals
Help the zoo to draw more visitors (and PETA protests) by introducing trainers to teach the animals tricks.
+ Animals will then have keepers _and_ trainers.
+ Trainers are categorized by the types of animals they train, _not_ species, ie big cats, apes, or birds
+ Try adding a `tricks` collection. Is a trick unique to a trainer? Or can only certain animal types do a certain trick, but multiple trainers can teach the trick? You decide. Make it difficult. You can do it!
+ Update the Angualr app to add CRUD interactions for trainers, animal types, and tricks.
+ Have fun with it. It's your last group project!
