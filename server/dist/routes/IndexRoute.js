"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoute {
    index(req, res) {
        console.log("weszlo2");
        return res.sendFile('indexs.html.gz');
    }
    static setRoute(linkOfPage) {
        console.log("weszlo1");
        const router = express_1.Router();
        const indexRoute = new IndexRoute();
        router.get(linkOfPage, indexRoute.index.bind(indexRoute));
        return router;
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=IndexRoute.js.map