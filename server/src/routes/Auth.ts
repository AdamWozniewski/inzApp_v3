import { Router } from 'express';
import passport from 'passport';
import authController from './../controllers/authController';
import links from './../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';

export class AuthRoute extends BasedRoutes {
  public  setRoute (): Router {
    const router: Router = Router();
    router.post(
        `${this.nameOfPath}${links.endpointType.actions.register}`,
        authController.register,
    );
    router.post(
        `${this.nameOfPath}${links.endpointType.actions.login}`,
        passport.authenticate('local', { session: false }),
        authController.login,
    );
    return router;
  }
}