import { Router } from 'express';
import { getIndividualSetting, createIndividualSetting, deleteIndividualSetting, updateIndividualSetting } from './../controllers/settingController';
import { BasedRoutes } from "./BasedRoutes";

export class SettingsRoute extends BasedRoutes {
    public setRoute (): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}/`, getIndividualSetting);
        router.post(`${this.nameOfPath}/add_settings`, createIndividualSetting);
        router.delete(`${this.nameOfPath}/delete_settings`, deleteIndividualSetting);
        router.put(`${this.nameOfPath}/delete_order`, updateIndividualSetting);
        return router;
    }
}