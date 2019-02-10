import User from '../models/User';
import jwt from 'jsonwebtoken';
import { Router, Response, Request } from 'express';

export default {
    async register(req: Request, res: Response, next: any): Promise<any> {
        const {first_name, last_name, email, password} = req.body;
        const user = new User({
            first_name,
            last_name,
            email,
        });
        await User.register(user, password);

        res.send("utpwrzeono")
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
        })
    }
}
