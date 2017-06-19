System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourceService;
    return {
        setters: [],
        execute: function () {
            CourceService = (function () {
                function CourceService() {
                }
                CourceService.prototype.getCourse = function () {
                    return ["Cource1", "Cource2", "Cource3"];
                };
                return CourceService;
            }());
            exports_1("CourceService", CourceService);
        }
    };
});
//# sourceMappingURL=cource.service.js.map