import {
    Router,
    Response,
    Request
} from 'express';
import test from './../controllers/authController';
import {BasedRoutes} from "./BasedRoutes";

export class MembersRoute extends BasedRoutes {
    public static setRoute (): Router {
        const router: Router = Router();
        // router.post(`${this.nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}