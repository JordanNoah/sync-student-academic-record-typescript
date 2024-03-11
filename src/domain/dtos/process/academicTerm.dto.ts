export class AcademicTermDto {
    constructor(
        referenceId: number,
        schoolPeriod: string,
        studyModel: string,
        startedAt: Date,
        finishedAt: Date
    ) {}
    static create(object:{[key:string]:any}):[string?,AcademicTermDto?]{
        const {
            reference_id,
            school_period,
            study_model,
            started_at,
            finished_at
        } = object

        return [
            undefined,
            new AcademicTermDto(
                reference_id,
                school_period,
                study_model,
                started_at,
                finished_at
            )
        ]
    }
}