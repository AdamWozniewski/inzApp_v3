"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MembersRoute {
    static setRoute(nameOfPath) {
        const router = express_1.Router();
        const memberRoute = new MembersRoute();
        // router.get(`${nameOfPath}/`, memberRoute.indexMarkers.bind(markerRoute));
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}
exports.MembersRoute = MembersRoute;
//# sourceMappingURL=Members.js.map