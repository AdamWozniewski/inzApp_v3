import express, { Application, Request, Response, Router } from 'express';
import socketIo ,{ Server as SocketIOServer } from 'socket.io';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { createServer, Server as HttpServer } from 'http';
// import { IndexRoute } from './../routes/IndexRoute';

import { PORT } from '../static/static';

export class StartServer {
    private app: Application;
    private server: HttpServer;
    private io: SocketIOServer;

    constructor () {
        this.app = express();
        this.server = createServer(this.app);
        this.io = socketIo(this.server);

        this.startServer();
        this.setStaticConfig();
        this.setRouter();
    }
    private setRouter () {
        const router: Router = express.Router();
        // router.get('/', (req, res) => res.sendFile('index.html.gz'));
        // this.app.use(router);

        // router.use(IndexRoute.setRoute('/'));

        this.app.use(router);
    }
    private setStaticConfig () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use((req: Request, res: Response, next: any) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.use(express.static(path.join(__dirname, '../../../dist/')));
        this.app.set('io', this.io);
    }
    private startServer () {
        this.server.listen(PORT, () => console.log('\x1b[36m', 'Serwer uruchomiony'));
    }
    public static bootstrap (): StartServer {
        return new StartServer();
    }
}