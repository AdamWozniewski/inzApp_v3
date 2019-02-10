"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_1 = require("typegoose");
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
// const UserSchema = new mongoose.Schema({
//     first_name: String,
//     last_name: String,
//     email: {
//         type: String,
//         unique: true,
//         lowercase: true,
//         trim: true,
//     }
// }, {
//     timestamps: true,
// });
//
// UserSchema.plugin(passportLocalMongoose, {
//     usernameField: 'email',
// });
let UserSchema = class UserSchema extends typegoose_1.Typegoose {
};
__decorate([
    typegoose_1.prop({ required: true })
], UserSchema.prototype, "first_name", void 0);
__decorate([
    typegoose_1.prop({ required: true })
], UserSchema.prototype, "last_name", void 0);
__decorate([
    typegoose_1.prop({
        required: true,
        lowercase: true,
        trim: true,
    })
], UserSchema.prototype, "email", void 0);
UserSchema = __decorate([
    plugin(passport_local_mongoose_1.default)
], UserSchema);
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map