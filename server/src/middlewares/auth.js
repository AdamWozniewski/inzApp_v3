import passport from 'passport';

const authorisation = (req, res, next) =>
    passport.authenticate(
        'jwt',
        {
          session: false,
        }
      )(req, res, next);

export default authorisation;
