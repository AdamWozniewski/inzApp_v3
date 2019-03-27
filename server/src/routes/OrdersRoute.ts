import { Router } from 'express';
import { getAllOrders, createNewOrder, deleteOrder, updateOrder } from './../controllers/orderController';
import { BasedRoutes } from "./BasedRoutes";

export class OrdersRoute extends BasedRoutes {
    public setRoute (): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}/`, getAllOrders);
        router.post(`${this.nameOfPath}/add_order`, createNewOrder);
        router.delete(`${this.nameOfPath}/delete_order`, deleteOrder);
        router.put(`${this.nameOfPath}/update_order`, updateOrder);
        return router;
    }
}