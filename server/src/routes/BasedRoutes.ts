import { Router } from 'express';
import SetRoute from "../services/SetRoute";

export class BasedRoutes implements SetRoute{
    constructor(protected nameOfPath: string) {
        this.nameOfPath = nameOfPath;
    }

    setRoute(): Router {
        return undefined;
    }
}