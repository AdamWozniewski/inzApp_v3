import { Schema, Document, model, connection } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { PassportLocalSchema } from 'mongoose';

export interface IUser extends Document {
    first_name: string;
    last_name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    }
}, {
    timestamps: true,
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

export default model<IUser>('User', UserSchema as PassportLocalSchema);