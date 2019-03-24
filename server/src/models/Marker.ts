import { Schema, Document, model } from 'mongoose';

export interface ICoord extends Document {
    lat: number;
    lng: number;
}

export interface IMarker extends Document {
    visible_persons: boolean;
    vehicles: true;
    title: string;
    coords: ICoord;
    time: Date;
}

const MarkerSchema: Schema = new Schema({
    visible_persons: {
        type: Boolean,
        required: false,
    },
    vehicles: {
        type: Boolean,
        required: false,
    },
    title: {
        type: String,
        required: true
    },
    coords: {
        type: Object,
        required: true,
    },
    time: {
        type: Date,
        required: false,
    },
});

export default model<IMarker>('Marker', MarkerSchema);