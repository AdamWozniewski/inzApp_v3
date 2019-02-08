"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MarkersRoute {
    static setRoute(nameOfPath) {
        const router = express_1.Router();
        const markerRoute = new MarkersRoute();
        // router.get(`${nameOfPath}/`, markerRoute.indexMarkers.bind(markerRoute));
        // router.post(`${nameOfPath}/add_marker`, markerRoute.makeMarker.bind(markerRoute));
        return router;
    }
}
exports.MarkersRoute = MarkersRoute;
//# sourceMappingURL=Markers.js.map