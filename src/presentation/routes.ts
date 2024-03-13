import { Router } from "express";
import {OrganizationRoutes} from "./organization/routes";
import {MoodleWsFunctionRoutes} from "./moodleWsFunction/routes";
import {ProcessRoutes} from "./process/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.use('/api/organization', OrganizationRoutes.routes)
        router.use('/api/moodlewsfunction', MoodleWsFunctionRoutes.routes)
        router.use('/api/process', ProcessRoutes.routes)
        return router
    }
}