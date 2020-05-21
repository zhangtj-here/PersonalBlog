let timeUtil = require("../util/TimeUtil");
let respUtil = require("../util/RespUtil");
let blogDao = require("../dao/BlogDao");
let tagsDao = require("../dao/TagsDao");
let tagBlogMappingDao = require("../dao/TagBlogMapping");
let url = require("url");

let path = new Map();


function editBlog(request, response) {
    let params = url.parse(request.url, true).query;
    let tags = params.tags.replace(/ /g, "").replace(/，/g, ",");
    request.on("data", function(data) {
        blogDao.insertBlog(params.title, data.toString().trim(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function(result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            let blogId = result.insertId;
            let tagList = tags.split(",");
            for(let item of tagList) {
                if (item == "") {
                    continue;
                }
                queryTag(item, blogId);
            }
        })
    })
}
path.set("/editBlog", editBlog);

function queryTag(tag, blogId) {
    tagsDao.querytags(tag, function (result) {
        if (result == null || result.length == 0) {
            insertTag(tag, blogId);
        } else {
            insertTagBlogMapping(result[0].id, blogId);
        }
    });

}

function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        insertTagBlogMapping(result.insertId, blogId);
    })
}

function insertTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function(result) {

    })
}


function queryBlogByPage(request, response) {
    let params = url.parse(request.url, true).query;
    blogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function (result) {
        for (let i = 0; i < result.length; i++) {
            result[i].content = result[i].content.replace(/<img[\w\W]*">/g,  "");
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g,  "");
            result[i].content = result[i].content.substring(0, 300);
        }
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}

path.set("/queryBlogByPage", queryBlogByPage);

function queryBlogCount(request, response) {
    blogDao.queryBlogCount(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}

path.set("/queryBlogCount", queryBlogCount);

module.exports.path = path;