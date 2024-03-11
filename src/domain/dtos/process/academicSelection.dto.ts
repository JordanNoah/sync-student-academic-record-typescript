import {AcademicElementDto} from "./academicElement.dto";

export class AcademicSelectionDto {
    private constructor(
        uuid: string,
        referenceId: number,
        admissionId: number,
        startedAt: number,
        academicElements:AcademicElementDto[]
    ) {}

    static create(object: {[key:string]:any}):[string?,AcademicSelectionDto?] {
        const {
            uuid,
            referenceId,
            admissionId,
            startedAt,
            academicElements
        } = object
        return [
            undefined,
            new AcademicSelectionDto(
                uuid,
                referenceId,
                admissionId,
                startedAt,
                academicElements
            )
        ]
    }
}