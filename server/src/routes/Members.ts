import {
    Router,
    Response,
    Request
} from 'express';

export class MembersRoute {
    public static setRoute (nameOfPath: string): Router {
        const router:Router = Router();
        const memberRoute:MembersRoute = new MembersRoute();
        // router.get(`${nameOfPath}/`, memberRoute.indexMarkers.bind(markerRoute));
        // router.post(`${nameOfPath}/add_marker`, memberRoute.makeMarker.bind(markerRoute));
        return router;
    }
}