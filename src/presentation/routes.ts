import { Router } from "express";
import {OrganizationRoutes} from "./organization/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.use('/api/organization', OrganizationRoutes.routes)
        return router
    }
}