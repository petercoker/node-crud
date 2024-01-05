const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Simple*Discipline#2029'
});

try {
    connection.query('USE twitter', (err, result) => {
        if (err) throw err;
        console.log("Database selected");
    
        // Create the 'tweets' table
        const createTweetsTable = `
            CREATE TABLE IF NOT EXISTS tweets (
                id INT AUTO_INCREMENT,
                text VARCHAR(255),
                user_id VARCHAR(255),
                PRIMARY KEY(id)
            )
        `;
        connection.query(createTweetsTable, (err, results, fields) => {
            if (err) {
                console.error('Error creating the tweets table:', err);
                return;
            }
            console.log('Tweets table created');
        });
    });
} catch (err) {
    console.error('Error connecting to the database:', err);
}

module.exports = connection