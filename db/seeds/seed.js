const format = require("pg-format");
const db = require("../connection");
const { dropTables, createTables } = require("./manage-tables");


const seed = ({ topicData, userData, articleData, commentData }) => {
  return dropTables()
    .then(() => {
      return createTables();
    })
    .then(() => {
      const topicValues = topicData.map((topic) => {
        return [topic.slug, topic.description, topic.img_url]
      });

      const insertOwnersQuery = format(
        `INSERT INTO topics (slug, description, img_url) VALUES %L RETURNING *;`,
        topicValues
      );

      return db.query(insertOwnersQuery);
    })
    .then(() => {
      const userValues = userData.map((user) => {
        return [user.username, user.name, user.avatar_url]
      });

      const insertOwnersQuery = format(
        `INSERT INTO users (username, name, avatar_url) VALUES %L RETURNING *;`,
        userValues
      );

      return db.query(insertOwnersQuery);
    })
    .then(() => {
      const articleValue = articleData.map((article) => {
        return [
          article.title, 
          article.topic, 
          article.author, 
          article.body, 
          new Date(article.created_at),
          article.votes,
          article.article_img_url
        ];
      });

      const insertArticlesValue = format(
        `INSERT INTO articles (
            title, topic, author, body, created_at, votes, article_img_url
          )
        VALUES %L RETURNING *;`,
        articleValue
      );

      return db.query(insertArticlesValue);
    })
    .then(() => {
      const commentValues = commentData.map((comment) => {
        return [
          comment.article_id, 
          comment.body, 
          comment.votes, 
          comment.author, 
          new Date(comment.created_at)
        ];
      });

      const insertcommentsQuery = format(
        `INSERT INTO comments (article_id, body, votes, author, created_at) VALUES %L RETURNING *;`,
        commentValues
      );

      return db.query(insertcommentsQuery);
    })
};
module.exports = seed;