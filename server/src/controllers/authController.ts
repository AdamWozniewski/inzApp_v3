import jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import User from './../models/User';

export default {
    register: async function (req: Request, res: Response, next: any): Promise<any> {
        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;
        const user: any = new User({
            first_name,
            last_name,
            email,
        });
        await User.register(user, password);
        return res.send('Udało sie');
    },
    async login(req: Request, res: Response, next: any): Promise<any> {
        const token = jwt.sign({
                id: req.user._id
            },
            process.env.SECRET,
            {
                expiresIn: 1200,
            });
        return res.send({
            token,
        });
    },
}
