const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Simple*Discipline#2029'
});

try {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        // create a database if it doesn't exist
        connection.query('CREATE DATABASE IF NOT EXISTS twitter', (err, result) => {
            if (err) throw err;
            console.log('Database created');
        });
        console.log('Connected to the database');
    });
} catch (err) {
    console.error('Error connecting to the database:', err);
}

module.exports = connection