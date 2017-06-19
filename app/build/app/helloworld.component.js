System.register(["angular2/core", "./cources.component", "./authors.component"], function (exports_1, context_1) {
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
    var core_1, cources_component_1, authors_component_1, HelloComp;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cources_component_1_1) {
                cources_component_1 = cources_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }
        ],
        execute: function () {
            HelloComp = (function () {
                function HelloComp() {
                    this.author = "something";
                }
                return HelloComp;
            }());
            HelloComp = __decorate([
                core_1.Component({
                    selector: 'hello',
                    template: "\n   <div> \n   Hello there is a {{author}} from my angualr 2\n   <cources>Cources has not loaded</cources>\n   <author>Athors are not loaded</author>\n   </div>\n   ",
                    directives: [cources_component_1.CourcesComponent, authors_component_1.AuthorsComponent]
                }),
                __metadata("design:paramtypes", [])
            ], HelloComp);
            exports_1("HelloComp", HelloComp);
        }
    };
});
//# sourceMappingURL=helloworld.component.js.map