import {RegisterOrganizationDto} from "../dtos/organization.dto";
import {OrganizationEntity} from "../entities/organization.entity";

export abstract class OrganizationRepository {
    abstract register(registerOrganizationDto: RegisterOrganizationDto): Promise<OrganizationEntity>
    abstract getById(id: number): Promise<OrganizationEntity | null>
    abstract getAll(): Promise<OrganizationEntity[]>
    abstract deleteById(id: number): Promise<OrganizationEntity>
    abstract enable(id: number): Promise<OrganizationEntity>
    abstract disable(id: number): Promise<OrganizationEntity>
}