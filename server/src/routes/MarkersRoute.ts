import { Router } from 'express';
import { getAllMarkersByPerson, createNewMarker, deleteMarker } from './../controllers/markerController';
import { BasedRoutes } from './BasedRoutes';

export class MarkersRoute extends BasedRoutes {
    public setRoute(): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}/`, getAllMarkersByPerson);
        router.post(`${this.nameOfPath}/add_marker`, createNewMarker);
        router.delete(`${this.nameOfPath}/delete_marker`, deleteMarker);
        return router;
    }
}