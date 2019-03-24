import dotenv from 'dotenv';
dotenv.config();

import express, { Application, Request, Response } from 'express';
import socketIo ,{ Server as SocketIOServer } from 'socket.io';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { createServer, Server as HttpServer } from 'http';

import { IndexRoute } from './../routes/IndexRoute';
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
        this.app.use(new IndexRoute('/').setRoute());
    }
    private setDatabaseConnect() {
        mongoose.connect(process.env.MONGO_URL);
        mongoose.Promise = global.Promise;
        mongoose.connection.on('error', err => {
            console.log('Błąd połączenia do bazy danych...');
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
        this.server.listen(process.env.PORT, () => console.log('\x1b[36m', 'Serwer uruchomiony'));
    }
    public static bootstrap (): StartServer {
        return new StartServer();
    }
}