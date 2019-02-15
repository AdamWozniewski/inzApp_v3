import { Router, Response, Request } from 'express';
import SetRoute from '../services/SetRoute';
import links from './../config/staticLinks';

import { MarkersRoute } from './Markers';
import { OrdersRoute } from './Orders';
import { MembersRoute } from './Members';

export class IndexRoute implements SetRoute {
    public index (req: Request, res: Response): void {
        return res.sendFile('indexs.html.gz');
    }
    public setRoute(): any {
        const router: Router = Router();
        router.get('/', (req, res) => {
            return res.send("weszlo")
        })
        router.use(MarkersRoute.setRoute(links.endpointType.markers));
        router.use(OrdersRoute.setRoute(links.endpointType.orders));
        router.use(MembersRoute.setRoute(links.endpointType.members));

        return router;
    }
    public static setUpLinks (): Router {
        const linker: IndexRoute = new IndexRoute();
        return linker.setRoute();
    }
}
