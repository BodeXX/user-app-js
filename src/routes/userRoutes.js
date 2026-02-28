import { Router } from 'express';

export function makeUserRoutes(userController) {
    const router = Router();

    router.post('/', (req, res, next) => userController.create(req, res, next));

    router.get('/', (req, res, next) => userController.getAll(req, res, next));


    return router;
}
