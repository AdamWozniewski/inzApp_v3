"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first_name, last_name, email, password } = req.body;
            const user = new User_1.default({
                first_name,
                last_name,
                email,
            });
            yield User_1.default.register(user, password);
            res.send("utpwrzeono");
        });
    },
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = jsonwebtoken_1.default.sign({
                id: req.user._id
            }, process.env.SECRET, {
                expiresIn: 1200,
            });
            return res.send({
                token,
            });
        });
    }
};
//# sourceMappingURL=authController.js.map