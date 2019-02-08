"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
const http_1 = require("http");
// import { IndexRoute } from './../routes/IndexRoute';
const static_1 = require("../static/static");
class StartServer {
    constructor() {
        this.app = express_1.default();
        this.server = http_1.createServer(this.app);
        this.io = socket_io_1.default(this.server);
        this.startServer();
        this.setStaticConfig();
        this.setRouter();
    }
    setRouter() {
        const router = express_1.default.Router();
        // router.get('/', (req, res) => res.sendFile('index.html.gz'));
        // this.app.use(router);
        // router.use(IndexRoute.setRoute('/'));
        this.app.use(router);
    }
    setStaticConfig() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.use(express_1.default.static(path.join(__dirname, '../../../dist/')));
        this.app.set('io', this.io);
    }
    startServer() {
        this.server.listen(static_1.PORT, () => console.log('\x1b[36m', 'Serwer uruchomiony'));
    }
    static bootstrap() {
        return new StartServer();
    }
}
exports.StartServer = StartServer;
//# sourceMappingURL=StartServer.js.map