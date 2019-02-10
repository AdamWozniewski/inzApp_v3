"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const authController_1 = __importDefault(require("./../controllers/authController"));
class AuthRoute {
    static setRoute(nameOfPath) {
        const router = express_1.Router();
        router.post('/register', authController_1.default.register);
        router.post('/login', passport_1.default.authenticate('local', { session: false }), authController_1.default.login);
        return router;
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=Auth.js.map