const Sequelize = require("sequelize");

// ORM to allow us to interact with the database and easily create tables and switch databases
const db = new Sequelize(
  "twitter", // database
  "root", // username
  "mysql#2024", // password
  {
    host: "localhost",
    dialect: "mysql",
  } // connection options
);

const Tweet = db.define("tweets", {
  tweet_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// create anonymous function to create tables
(async () => {
  await db.sync({ force: false }); // delete all tables and recreate
  await Tweet.create({ user_id: "1", text: "Hello World" });
  console.log("Tables created");
  const tweets = await Tweet.findAll();
  console.log(tweets.map((tweet) => tweet.toJSON()));
})();

module.exports = Tweet;
