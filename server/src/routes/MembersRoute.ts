import { Router, Response, Request } from 'express';
import { getAllMembers, deleteMember, updateMember } from './../controllers/memberController'
import { BasedRoutes } from "./BasedRoutes";

export class MembersRoute extends BasedRoutes {
    public setRoute (): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}/`, getAllMembers);
        router.put(`${this.nameOfPath}/update_member`, updateMember);
        router.delete(`${this.nameOfPath}/delete_member`, deleteMember);
        return router;
    }
}