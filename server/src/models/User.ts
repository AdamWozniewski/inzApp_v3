import mongoose from 'mongoose';
import {plugin, prop, Typegoose} from "typegoose";
import passportLocalMongoose from 'passport-local-mongoose';

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



@plugin(passportLocalMongoose, {
    usernameField: 'email'
})
class UserSchema extends Typegoose {
    @prop({ required: true })
    first_name?: String;

    @prop({ required: true })
    last_name?: String;

    @prop({
        required: true,
        lowercase: true,
        trim: true,
    })
    email?: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    }
}

const User= new UserSchema().getModelForClass(UserSchema);
export default User;