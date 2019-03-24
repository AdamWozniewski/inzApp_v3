import { Router, Response, Request } from 'express';
import links from './../config/staticLinks';

import { MarkersRoute } from './Markers';
import { OrdersRoute } from './Orders';
import { MembersRoute } from './Members';
import { AuthRoute } from './Auth';
import { BasedRoutes } from "./BasedRoutes";

export class IndexRoute extends BasedRoutes {
    public index (req: Request, res: Response): void {
        return res.sendFile('indexs.html.gz');
    }
    public setRoute(): any {
        const router: Router = Router();
        router.use(new MarkersRoute(links.endpointType.markers).setRoute());
        // router.use(OrdersRoute.setRoute(links.endpointType.orders));
        // router.use(MembersRoute.setRoute(links.endpointType.members));
        router.use(new AuthRoute(links.endpointType.auth).setRoute());
        return router;
    }
}
