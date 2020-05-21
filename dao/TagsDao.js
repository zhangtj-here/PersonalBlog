let dbutil = require("../dao/DButil");

function insertTag(tag, ctime, utime, success) {

    let insertSql = "insert into tags (`tag`, `c_time`, `u_time`) values (?, ?, ?)";
    let params = [tag, ctime, utime];

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

function querytags(tag, success) {

    let querySql = "select * from tags where tag = ?";
    let params = [tag];

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

module.exports.insertTag = insertTag;
module.exports.querytags = querytags;