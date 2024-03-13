import {Request, Response} from "express"
import {RegisterOrganizationDto} from "../../domain/dtos/registerOrganization.dto";
import {ProcessDto} from "../../domain/dtos/process/process.dto";
export class ProcessController {
    startProcess = (req: Request, res: Response) => {
        const [error,processDto] = ProcessDto.create(req.body)
        if (error) return res.status(404).json({error})
        res.send(processDto)
    }
}