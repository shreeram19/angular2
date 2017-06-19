System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Article;
    return {
        setters: [],
        execute: function () {
            Article = (function () {
                function Article(link, votes, title) {
                    this.link = link;
                    this.votes = votes || 0;
                    this.title = title;
                }
                Article.prototype.upvote = function () {
                    this.votes += 1;
                    return false;
                };
                Article.prototype.downvote = function () {
                    this.votes -= 1;
                    return false;
                };
                return Article;
            }());
            exports_1("Article", Article);
        }
    };
});
//# sourceMappingURL=article.class.js.map