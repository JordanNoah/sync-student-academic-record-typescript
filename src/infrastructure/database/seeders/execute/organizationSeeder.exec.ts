import {OrganizationSequelize} from "../../models/Organization";
import OrganizationSeederData from "../data/organizationSeeder.data"
import {RegisterOrganizationDto} from "../../../../domain/dtos/registerOrganization.dto";

export class OrganizationSeederExec {
    public async up(){
        const organizationSeeder = OrganizationSeederData;
        for (let i = 0; i < organizationSeeder.length; i++){
            const [error,organizationDto] = RegisterOrganizationDto.create(organizationSeeder[i])
            if (error) throw Error(error)
            const organization = organizationDto!
            await OrganizationSequelize.findOrCreate({
                where:{
                    abbreviation:organization.abbreviation,
                    modality:organization.modality
                },
                defaults:{
                    name:organization.name,
                    abbreviation:organization.abbreviation,
                    degree_abbreviation:organization.abbreviation,
                    origin:organization.website,
                    rest_path:organization.rest_path,
                    token:organization.token,
                    modality:organization.modality,
                    additional_data:null,
                    translations:organization.translations,
                    parent:null,
                    importance:null,
                    available:false
                }
            })
        }
    }

    public async down(){
        await OrganizationSequelize.sync({force:true})
    }
}