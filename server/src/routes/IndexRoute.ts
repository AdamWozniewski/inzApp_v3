import { Router, Response, Request } from 'express';
import SetRoute from '../services/SetRoute';
import links from './../config/staticLinks';

import { MarkersRoute } from './Markers';
import { OrdersRoute } from './Orders';
import { MembersRoute } from './Members';
import { AuthRoute } from './Auth';

export class IndexRoute implements SetRoute {
    public index (req: Request, res: Response): void {
        return res.sendFile('indexs.html.gz');
    }
    public setRoute(): any {
        const router: Router = Router();
        // router.use(MarkersRoute.setRoute(links.endpointType.markers));
        // router.use(OrdersRoute.setRoute(links.endpointType.orders));
        // router.use(MembersRoute.setRoute(links.endpointType.members));
        router.use(AuthRoute.setRoute(links.endpointType.auth));
        return router;
    }
    public static setUpLinks (): Router {
        const linker: IndexRoute = new IndexRoute();
        return linker.setRoute();
    }
}
