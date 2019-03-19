import {
    Router,
    Response,
    Request
} from 'express';


export class OrdersRoute {
    public static setRoute (nameOfPath: string): Router {
        const router:Router = Router();
        // const ordersRoute:OrdersRoute = new OrdersRoute();
        // router.get(`${nameOfPath}/testPolaczenia`, test.testlogin);
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}