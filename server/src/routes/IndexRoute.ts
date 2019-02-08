import { Router, Response, Request } from 'express';
import * as path from 'path';

export class IndexRoute {
    public index (req: Request, res: Response): void {
        console.log("weszlo2")
        return res.sendFile('indexs.html.gz');
    }
    public static setRoute(linkOfPage: string): Router {
        console.log("weszlo1")
        const router: Router = Router();
        const indexRoute:IndexRoute = new IndexRoute();
        router.get(linkOfPage, indexRoute.index.bind(indexRoute));
        return router;
    }
}