import mongoose, {Document, Schema} from 'mongoose';
// import * as passportLocalMongoose from 'passport-local-mongoose';
const passportLocalMongoose = require('passport-local-mongoose');
// @plugin(passportLocalMongoose)
// class UserSchema extends Typegoose {
//     @prop({ required: true })
//     first_name?: String;
//
//     @prop({ required: true })
//     last_name?: String;
//
//     @prop({required: true})
//     email?: {
//         type: String,
//         unique: true,
//         lowercase: true,
//         trim: true,
//     }
// }
//
// const User: any  = new UserSchema()
//     .getModelForClass(UserSchema, {
//         schemaOptions: {
//             collection: 'users',
//         }
//     }
// );
//
// export default User;

// export interface IUser extends mongoose.Document {
//     first_name: String,
//     last_name: String,
//     email: {
//         type: String,
//         unique: true,
//         lowercase: true,
//         trim: true,
//     }
// }
//
// const UserSchema = new mongoose.Schema({
//     first_name: {
//         type: String,
//         required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//     },
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
//
// const User = mongoose.model<IUser>('User', UserSchema);
//
// export default User;

export interface IUser extends Document {
    first_name: string;
    last_name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    last_name: { type: String, required: true },
    first_name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);