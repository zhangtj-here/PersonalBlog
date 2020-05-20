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
    create: function() {
        //请求数据，给content赋值
        this.content = '123';
    }
})

let articleList = new Vue({
    el: "#article_list",
    data: {
        articleList: [
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
            {
                title: "使用Nginx反向代理部署laravel和history模式的Vue项目[更新]",
                content: "[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行...",
                date: "2019-12-06",
                views: "6,117",
                tags: "test1 test2",
                id: "1",
                link: ""
            },
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

    },
    create: function() {

    }
})