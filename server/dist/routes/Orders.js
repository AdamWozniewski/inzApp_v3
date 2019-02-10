"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class OrdersRoute {
    static setRoute(nameOfPath) {
        const router = express_1.Router();
        const ordersRoute = new OrdersRoute();
        // router.get(`${nameOfPath}/`, memberRoute.indexMarkers.bind(markerRoute));
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}
exports.OrdersRoute = OrdersRoute;
//# sourceMappingURL=Orders.js.map