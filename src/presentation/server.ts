import express, {Router} from "express";
import {DbSequelize} from "../infrastructure/database/init";
import {Moodle} from "../domain/client/moodle";
import {CoreUserGetUserDto} from "../domain/dtos/moodle/coreUserGetUser.dto";
import {CoreCourseGetCoursesByFieldDto} from "../domain/dtos/moodle/coreCourseGetCoursesByField.dto";
import * as http from "http";

interface Options {
    port: number,
    routes: Router
}

export class Server {
    public readonly app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options) {
        const {port, routes} = options
        this.port = port
        this.routes = routes
    }

    public async start() {
        DbSequelize().then(async() => {
            const server = http.createServer(this.app)
            this.app.use(express.json())
            this.app.use(this.routes)
            server.listen(this.port, () => {
                console.log(`Server running on PORT: ${this.port}`)
            })
        }).catch((err) => {
            console.error(err)
        })
    }
}