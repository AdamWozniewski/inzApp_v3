import { Schema, Document, model } from 'mongoose';

export interface ISettings extends Document {
    person_id: Object
}

const SettingsSchema: Schema = new Schema({
    person_id: {
        type: Object,
        required: false,
    },
});

export default model<ISettings>('Settings', SettingsSchema);
