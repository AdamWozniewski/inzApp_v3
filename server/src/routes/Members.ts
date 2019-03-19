import {
    Router,
    Response,
    Request
} from 'express';
import test from './../controllers/authController';

export class MembersRoute {
    public static setRoute (nameOfPath: string): Router {
        const router:Router = Router();
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}