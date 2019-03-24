import { Schema, Document, model } from 'mongoose';

export interface IOrder extends Document {
    in_progress: boolean;
    status: true;
    name_of_order: string;
    time: Date;
}

const OrderSchema: Schema = new Schema({
    in_progress: {
        type: Boolean,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
    },
    name_of_order: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: false,
    },
});

const Order = model<IOrder>('Order', OrderSchema);
export default Order;
