import { Response, Request } from 'express';

export function getAllMarkersByPerson(req: Request, res: Response): Response {
    return res;
}

export function createNewMarker(req: Request, res: Response): Response {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;
    return res;
}

export function deleteMarker(req: Request, res: Response): Response {
    return res;
}