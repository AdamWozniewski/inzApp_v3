import { Router } from 'express';
import passport from 'passport';
import authController from './../controllers/authController';

export class AuthRoute {
  public static setRoute (nameOfPath: string): Router {
    const router:Router = Router();
    router.post('/register', authController.register);
    router.post('/login', passport.authenticate('local', { session: false }), authController.login);

    return router;
  }
}