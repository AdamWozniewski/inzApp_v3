import passport from 'passport';
import passportJwt from 'passport-jwt';
import User from '../models/user';

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;


function verifyCallback(payload: any, done: any): Promise<any> {
    return User.findOne({
        _id: payload.id,
    })
    .then((user: any) => done(null, user))
    .catch((err: any) => done(err))
}

function passportConfig() {
    const config = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    };
    // passport.use(User.createStrategy());
    passport.use(new JWTStrategy(config, verifyCallback));
}
export default passportConfig;