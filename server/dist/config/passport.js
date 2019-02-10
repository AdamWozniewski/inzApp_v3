"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const user_1 = __importDefault(require("../models/user"));
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
function verifyCallback(payload, done) {
    return user_1.default.findOne({
        _id: payload.id,
    })
        .then((user) => done(null, user))
        .catch((err) => done(err));
}
exports.default = () => {
    const config = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    };
    passport_1.default.use(user_1.default.createStrategy());
    passport_1.default.use(new JWTStrategy(config, verifyCallback));
};
//# sourceMappingURL=passport.js.map