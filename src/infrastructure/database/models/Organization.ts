import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../sequelize";

interface OrganizationRow {
    id: number,
    abbreviation: string,
    degree_abbreviation: string,
    origin: string,
    rest_path: string,
    token: string,
    modality: string,
    additional_data:any,
    translations:any,
    parent:number,
    importance:number,
    available:boolean,
    createdAt?:Date,
    updatedAt?:Date
}

export class OrganizationSequelize extends Model<OrganizationRow, Omit<OrganizationRow, 'id'>> {
    declare id: number
    declare abbreviation: string
    declare degree_abbreviation: string
    declare origin: string
    declare rest_path: string
    declare token: string
    declare modality: string
    declare additional_data:any
    declare translations:any
    declare parent:number
    declare importance:number
    declare available:boolean
    declare readonly createdAt:Date
    declare readonly updatedAt:Date
}

OrganizationSequelize.init({
    id: number,
    abbreviation: string,
    degree_abbreviation: string,
    origin: string,
    rest_path: string,
    token: string,
    modality: string,
    additional_data:any,
    translations:any,
    parent:number,
    importance:number,
    available:boolean,
},{
    sequelize,
    timestamps: true,
    tableName: 'organization'
})