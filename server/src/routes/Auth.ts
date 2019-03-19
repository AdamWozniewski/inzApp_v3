import { Router } from 'express';
import passport from 'passport';
import authController from './../controllers/authController';
import links from "../config/staticLinks";

export class AuthRoute {
  public static setRoute (nameOfPath: string): Router {
    const router: Router = Router();
    router.post(
        `${nameOfPath}${links.endpointType.actions.register}`,
        authController.register
    );
    router.post(
        `${nameOfPath}${links.endpointType.actions.login}`,
        passport.authenticate('local', { session: false }),
        authController.login
    );

    return router;
  }
}