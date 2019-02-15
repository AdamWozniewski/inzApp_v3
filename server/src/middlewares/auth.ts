import passport from 'passport';

const authorisation: object = (
  req: Request, 
  res: Response, 
  next: any) => passport.authenticate(
    'jwt', {
      session: false,
    }
  )(req, res, next);

export default authorisation;
