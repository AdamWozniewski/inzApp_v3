import { Router } from 'express';
import { BasedRoutes } from "./BasedRoutes";

export class OrdersRoute extends BasedRoutes {
    public setRoute (): Router {
        const router: Router = Router();
        // router.get(`${nameOfPath}/testPolaczenia`, test.testlogin);
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}