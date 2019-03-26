import { Router } from 'express';
import { getAllMarkersByPerson } from './../controllers/markerController';
import { BasedRoutes } from './BasedRoutes';

export class MarkersRoute extends BasedRoutes {
    public setRoute(): Router {
        const router: Router = Router();
        // router.get(`${this.nameOfPath}/`, markerRoute.indexMarkers.bind(markerRoute));
        // router.post(`${this.nameOfPath}/add_marker`, markerRoute.makeMarker.bind(markerRoute));
        return router;
    }
}