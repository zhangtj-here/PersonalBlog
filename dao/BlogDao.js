let dbutil = require("./DButil");

function insertBlog(title, content, tags, views, ctime, utime, success) {

    let insertSql = "insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?)";
    let params = [title, content, tags, views, ctime, utime];

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

function queryBlogByPage(page, pageSize, success) {
    let querySql = "select * from blog order by id desc limit ?, ?";
    let params = [page * pageSize, pageSize];

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

function queryBlogCount(success) {
    let querySql = "select count(1) as count from blog";
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

module.exports.insertBlog = insertBlog;
module.exports.queryBlogByPage = queryBlogByPage;

module.exports.queryBlogCount = queryBlogCount;