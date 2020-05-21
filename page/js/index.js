let everyDay = new Vue({
    el: "#every_day",
    data: {
        content: "afawefewaf"
    },
    computed: {
        getContent: function() {
            return this.content;
        }
    },
    created: function() {
        //请求数据，给content赋值
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then(function (resp) {
            everyDay.content = resp.data.data[0].content;
        }).catch(function (error) {
            console.log(error);
        })

    }
})

let articleList = new Vue({
    el: "#article_list",
    data: {
        page: 1,
        pageSize: 5,
        count: 100,
        pageNumList: [],
        articleList: [
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            }
        ]
    },
    computed: {
        jumpTo: function() {
            return function (page) {
                this.getPage(page, this.pageSize);
            }
        },
        getPage: function(page, pageSize) {
            return function (page, pageSize) {
                axios({
                    method: "get",
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then(function(resp) {
                    let result = resp.data.data;
                    let list = [];
                    for (let item of result) {
                        let temp = {};
                        temp.title = item.title;
                        temp.content = item.content;
                        temp.date = item.ctime;
                        temp.views = item.views;
                        temp.tags = item.tags;
                        temp.id = item.id;
                        temp.link = "" + item.id;
                        list.push(temp);
                    }
                    articleList.articleList = list;
                    articleList.page = page;
                }).catch(function (resp) {
                    console.log(resp);
                });
                axios({
                    method: "get",
                    url: "/queryBlogCount"
                }).then(function(resp) {
                    articleList.count = resp.data.data[0].count;
                    articleList.generatePageTool;
                }).catch(function(resp) {
                    console.log(resp);
                })
            }
        },
        generatePageTool: function () {
            let nowPage = this.page;
            let pageSize = this.pageSize;
            let totalCount = this.count;
            let result = [];
            result.push({text: "<<", page: 1});
            if (nowPage > 2) {
                result.push({text: nowPage - 2, page: nowPage - 2});
            }
            if (nowPage > 1) {
                result.push({text: nowPage - 1,page: nowPage - 1});
            }
            result.push({text: nowPage, page: nowPage});
            if (nowPage + 1 <= (totalCount + pageSize  - 1) / pageSize) {
                result.push({text: nowPage + 1, page: nowPage + 1});
            }
            if (nowPage + 2 <= (totalCount + pageSize  - 1) / pageSize) {
                result.push({text: nowPage + 2, page: nowPage + 2});
            }
            result.push({text: ">>", page: parseInt((totalCount + pageSize  - 1) / pageSize)});
            this.pageNumList = result;
            return result;
        }
    },
    created: function() {
        this.getPage(this.page, this.pageSize);
    }
})