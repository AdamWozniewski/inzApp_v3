import {
    Router,
    Response,
    Request
} from 'express';

export class MarkersRoute {
    public static setRoute (nameOfPath: string): Router {
        const router:Router = Router();
        const markerRoute:MarkersRoute = new MarkersRoute();
        // router.get(`${nameOfPath}/`, markerRoute.indexMarkers.bind(markerRoute));
        // router.post(`${nameOfPath}/add_marker`, markerRoute.makeMarker.bind(markerRoute));
        return router;
    }
}