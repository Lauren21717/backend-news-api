const db = require("../connection");

// Get all of the users
db.query(`SELECT * FROM users;`)
    .then((result) => console.log("All Users:", result.rows))
    .catch((err) => console.log("Error on get all of the user:", err));

// Get all of the articles where the topic is coding
db.query(`SELECT * FROM articles WHERE topic = 'coding';`)
    .then((result) => console.log("Coding Articles:", result.rows))
    .catch(err => console.log("Error on get all the coding articles"));

// Get all of the comments where the votes are less than zero
db.query(`SELECT * FROM comments WHERE votes < 0;`)
    .then(result => console.log("Votes comments", result.rows))
    .catch(err => console.log("Error on get votes comment:", err));

// Get all of the topics
db.query(`SELECT * FROM topics;`)
    .then(result => console.log("All topics", result.rows))
    .catch(err => console.log("Error on get all topics:", err));

// Get all of the articles by user grumpy19
db.query(`SELECT * FROM articles WHERE author = 'grumpy19';`)
    .then(result => console.log("Articles by user grumpy19", result.rows))
    .catch(err => console.log("Error on get articles by user grumpy19:", err));

// Get all of the comments that have more than 10 votes.
db.query(`SELECT * FROM comments WHERE votes > 10;`)
    .then(result => console.log("Comments that have more than 10 votes", result.rows))
    .catch(err => console.log("Error on get comments that have more than 10 votes:", err));