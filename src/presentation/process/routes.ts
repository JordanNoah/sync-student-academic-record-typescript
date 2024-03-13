import {Router} from "express";
import {ProcessController} from "./controller";

export class ProcessRoutes {
    static get routes(): Router{
        const router = Router()

        const controller = new ProcessController()
        router.post('/', controller.startProcess)
        return router
    }
}