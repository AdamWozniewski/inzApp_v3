import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

import express, { Application, Request, Response, Router } from 'express';
import socketIo ,{ Server as SocketIOServer } from 'socket.io';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { createServer, Server as HttpServer } from 'http';
import { IndexRoute } from './../routes/IndexRoute';

import { PORT } from './../config/static';

import { MONGO_URL } from './../config/database';
import passportConfig from './../config/passport';

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
        this.setDatabaseConnect();
        passportConfig();
    }
    private setRouter () {
        const router: Router = express.Router();


        this.app.use(IndexRoute.setUpLinks());
    }
    private setDatabaseConnect() {
        mongoose.connect(MONGO_URL);
        mongoose.Promise = global.Promise;
        mongoose.connection.on('error', err => {
            console.log('Could not connect to the database. Exiting now...');
            process.exit();
        });
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