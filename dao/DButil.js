let mysql = require("mysql");

function createConnection() {
    let connection = mysql.createConnection({
        host: "192.168.1.2",
        port: "3306",
        user: "root",
        password: "qq987654321.com",
        database: "my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;