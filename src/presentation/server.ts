import express, {Router} from "express";
import {DbSequelize} from "../infrastructure/database/init";
import {Moodle} from "../domain/client/moodle";
import {CoreUserGetUserDto} from "../domain/dtos/moodle/coreUserGetUser.dto";
import {CoreCourseGetCoursesByFieldDto} from "../domain/dtos/moodle/coreCourseGetCoursesByField.dto";

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

        }).catch((err) => {
            console.error(err)
        })
    }
}