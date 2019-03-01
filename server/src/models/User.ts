import { Mongoose, model } from 'mongoose';
import { prop, Typegoose, ModelType, InstanceType, plugin } from 'typegoose';
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



@plugin(passportLocalMongoose)
class UserSchema extends Typegoose {
    @prop({ required: true })
    first_name?: String;

    @prop({ required: true })
    last_name?: String;

    @prop({required: true})
    email?: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    }
}

const User: any  = new UserSchema().getModelForClass(UserSchema, {
    schemaOptions: {
        collection: 'users',
    }
});

export default User;