let dbutil = require("../dao/DButil");

function insertTagBlogMapping(tagId, blogId, ctime, utime, success) {

    let insertSql = "insert into tag_blog_mapping (`tag_id`, `blog_id`, `c_time`, `u_time`) values (?, ?, ?, ?)";
    let params = [tagId, blogId, ctime, utime];

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

module.exports.insertTagBlogMapping = insertTagBlogMapping;
module.exports.querytags = querytags;