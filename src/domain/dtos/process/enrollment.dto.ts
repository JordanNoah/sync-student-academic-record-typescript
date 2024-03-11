import {AcademicSelectionDto} from "./academicSelection.dto";

export class EnrollmentDto {
    private constructor(
        public uuid:string,
        public referenceId:number,
        public language:string,
        public startedAt:Date,
        public academicProgram:string,
        public academicTerm:string,
        public academicSelections:AcademicSelectionDto
    ) {}

    static create(object: {[key:string]: any}):[string?, EnrollmentDto?]{
        const {
            uuid":"8e1d36e5-6e19-5c2c-89bf-aaef7c21b47b",
        "reference_id":577707,
            "language":"es",
            "started_at":"2024-02-22T14:02:24.000000Z",
            "academic_program":{
            "uuid":"2c8bb310-0c08-57f0-a74c-933e78f8dbc3",
                "reference_id":1106,
                "type":"Program",
                "abbreviation":"DDMBA",
                "language":"es",
                "name":"Máster Universitario en Administración y Dirección de Empresas",
                "version":"2017-vEA-PPS-TFC-Oficial"
        },
        "academic_term":{
            "reference_id":1,
                "school_period":"Funiber",
                "study_model":"_SEMESTRE",
                "started_at":"2024-02-22T00:00:00.000000Z",
                "finished_at":"2026-02-22T00:00:00.000000Z"
        },
        "academic_selections":[
        } = object
        return []
    }
}