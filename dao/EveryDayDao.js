let dbutil = require("./DButil");

function insertEveryDay(content, ctime, success) {

    let insertSql = "insert into every_day (`content`, `c_time`) values (?, ?)";
    let params = [content, ctime];

    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(error, result) {
        if (!error) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryEveryDay(success) {

    let querySql = "select * from every_day order by id desc limit 1";
    let params = [];

    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result) {
        if (!error) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

module.exports.insertEveryDay = insertEveryDay;
module.exports.queryEveryDay = queryEveryDay;