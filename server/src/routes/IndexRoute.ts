import { Router, Response, Request } from 'express';
import links from './../config/staticLinks';

import { MarkersRoute } from './MarkersRoute';
import { OrdersRoute } from './OrdersRoute';
import { MembersRoute } from './MembersRoute';
import { AuthRoute } from './AuthRoute';
import { BasedRoutes } from "./BasedRoutes";

export class IndexRoute extends BasedRoutes {
    public index (req: Request, res: Response): void {
        return res.sendFile('indexs.html.gz');
    }
    public setRoute(): any {
        const router: Router = Router();
        // router.use(new MarkersRoute(links.endpointType.markers).setRoute());
        // router.use(OrdersRoute.setRoute(links.endpointType.orders));
        // router.use(MembersRoute.setRoute(links.endpointType.members));
        router.use(new AuthRoute(links.endpointType.auth).setRoute());
        return router;
    }
}
