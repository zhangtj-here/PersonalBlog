let radomTags = new Vue({
    el: "#radom_tags",
    data: {
        tags: ["html", "css", "javascript", "node", "flutter", "vue", "angular", "react", "java", "c", "c++", "python", "go", "rust", "ruby", "php", "sql", "mongodb", "oracle", "redis"]
    },
    computed: {
        randomColor: function () {
            return function() {
                let red = Math.random() * 255;
                let green = Math.random() * 255;
                let blue = Math.random() * 255;
                return "rgb(" + red + "," + green + "," + blue + ")";
            }
        },
        randomSize: function() {
            return function () {
                let size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created: function() {

    }
});

let newHot = new Vue({
    el: "#new_hot",
    data: {
        titleList: [
            {title: "使用码云git的webhook实现生产环境代", link: "http://www.baidu.com" },
            {title: "使用码云git的webhook实现生产环境代", link: "http://www.baidu.com" },
            {title: "使用码云git的webhook实现生产环境代", link: "http://www.baidu.com" },
            {title: "使用码云git的webhook实现生产环境代", link: "http://www.baidu.com" },
            {title: "使用码云git的webhook实现生产环境代", link: "http://www.baidu.com" }
        ]
    }
})


let newComments = new Vue({
    el: "#new_comments",
    data: {
        commentList: [
            {
                name: "慕容云海",
                date: "2天前",
                comment: "博客不错，大佬有空可以回访一下htt"
            },
            {
                name: "慕容云海",
                date: "2天前",
                comment: "博客不错，大佬有空可以回访一下htt"
            },
            {
                name: "慕容云海",
                date: "2天前",
                comment: "博客不错，大佬有空可以回访一下htt"
            },
            {
                name: "慕容云海",
                date: "2天前",
                comment: "博客不错，大佬有空可以回访一下htt"
            },
            {
                name: "慕容云海",
                date: "2天前",
                comment: "博客不错，大佬有空可以回访一下htt"
            }
        ]
    }
})