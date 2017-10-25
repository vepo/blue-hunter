import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../model/User';
import { UserRepository } from '../data/UserRepository';

export class UserRouter {
    router: Router;

    /**
     * Initialize the ProjectRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * GET all Projectes.
     */
    public search(req: Request, res: Response, next: NextFunction) {
        UserRepository.search(req.params.term).then(users => res.send(users)).catch(err => {
            res.status(500);
            res.send(err);
        });
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/:term', this.search);
    }

}

// Create the UserRouter, and export its configured Express.Router
const UserRoutes = new UserRouter();
UserRoutes.init();

export default UserRoutes.router;