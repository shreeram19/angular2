System.register(["angular2/core", "./redit-article.component", "./article.class"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, redit_article_component_1, article_class_1, ReditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (redit_article_component_1_1) {
                redit_article_component_1 = redit_article_component_1_1;
            },
            function (article_class_1_1) {
                article_class_1 = article_class_1_1;
            }
        ],
        execute: function () {
            ReditComponent = (function () {
                function ReditComponent() {
                    this.articles = [
                        new article_class_1.Article("www.facebook.com", 30, "Facebook social Media"),
                        new article_class_1.Article("www.google.com", 33, "Google Home Page ")
                    ];
                }
                ReditComponent.prototype.submitForm = function (title, link) {
                    console.log("This is coming from form : title: " + title.value + " link : " + link.value);
                    this.articles.push(new article_class_1.Article(link.value, 0, title.value));
                };
                ReditComponent.prototype.sortArticle = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                return ReditComponent;
            }());
            ReditComponent = __decorate([
                core_1.Component({
                    selector: 'redit',
                    template: "\n    <form id=\"mainForm\" class=\"\" (submit)=\"submitForm(newTitle,newLink)\">\n    <label for=\"title-input\" >Title:</label>\n    <input required id=\"title-input\" type=\"text\" class=\"title-input input\" #newTitle/>\n     <label for=\"link-input\" >LINK:</label>\n    <input required id=\"link-input\" type=\"text\" class=\"link-input input\" #newLink/>\n    <button type=\"submit\" class=\"submit-button\" >Submit </button>\n\n    <r-article *ngFor= \"#article of sortArticle()\"  [article]=\"article\">Loading article....</r-article>\n\n    </form>\n    ",
                    directives: [redit_article_component_1.ReditArticleComponent]
                }),
                __metadata("design:paramtypes", [])
            ], ReditComponent);
            exports_1("ReditComponent", ReditComponent);
        }
    };
});
//# sourceMappingURL=redit.component.js.map