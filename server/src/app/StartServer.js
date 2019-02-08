"use strict";
exports.__esModule = true;
var StartServer = /** @class */ (function () {
    // private app: Application;
    // private server: Server;
    // private io: IoServer;
    function StartServer() {
        this.startServer();
    }
    StartServer.prototype.startServer = function () {
        // this.server.listen(PORT, () => console.log('\x1b[36m', 'Serwer uruchomiony'));
        console.log("WESZLO");
    };
    StartServer.bootstrap = function () {
        return new StartServer();
    };
    return StartServer;
}());
exports.StartServer = StartServer;
