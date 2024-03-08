import { Request, Response } from "express";
import {OrganizationRepository} from "../../domain/repositories/organization.repository";
import {RegisterOrganizationDto} from "../../domain/dtos/organization.dto";
import organizations from "../../infrastructure/database/seeders/data/organizationSeeder.data";

export class OrganizationController {
    constructor(
        private readonly organizationRepository:OrganizationRepository
    ) {}

    createSignature = (req: Request, res: Response) => {
        const [error,registerOrganizationDto] = RegisterOrganizationDto.create(req.body)
        if (error) return res.status(400).json({error})
        this.organizationRepository.register(registerOrganizationDto!).then((organization) => {
            res.json(organization)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }

    getById = (req: Request, res: Response) => {
        this.organizationRepository.getById(Number(req.params.id)).then((organization) => {
            res.json(organization)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }

    getAll = (req: Request, res: Response) => {
        this.organizationRepository.getAll().then((organizations) => {
            res.json(organizations)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }

    deleteById = (req: Request, res: Response) => {
        this.organizationRepository.deleteById(Number(req.params.id)).then((organization) => {
            res.json(organization)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }
}