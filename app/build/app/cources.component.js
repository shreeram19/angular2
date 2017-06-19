System.register(["angular2/core", "./cource.service", "./auto-grow.directive"], function (exports_1, context_1) {
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
    var core_1, cource_service_1, auto_grow_directive_1, CourcesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cource_service_1_1) {
                cource_service_1 = cource_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }
        ],
        execute: function () {
            CourcesComponent = (function () {
                function CourcesComponent(courceService) {
                    this.title = "This is the title of this cource";
                    this.cources = courceService.getCourse();
                }
                return CourcesComponent;
            }());
            CourcesComponent = __decorate([
                core_1.Component({
                    selector: 'cources',
                    template: "\n    <input type=\"text\" my-autoGrow />\n    <h2> {{title}} </h2>\n    <ul>\n    <li *ngFor=\"#cource of cources\"> {{cource}}</li>\n    </ul>\n    ",
                    providers: [cource_service_1.CourceService],
                    directives: [auto_grow_directive_1.AutoGrowDirective]
                }),
                __metadata("design:paramtypes", [cource_service_1.CourceService])
            ], CourcesComponent);
            exports_1("CourcesComponent", CourcesComponent);
        }
    };
});
//# sourceMappingURL=cources.component.js.map