export class UpdateMoodleWsFunctionDto {
    private constructor(
        public id: number,
        public moodleFunction: string,
        public abbreviation: string
    ) {}

    static create(object: {[key:string]:any}):[string?,UpdateMoodleWsFunctionDto?]{
        const {
            id,
            moodleFunction,
            abbreviation
        } = object

        return [
            undefined,
            new UpdateMoodleWsFunctionDto(
                id,
                moodleFunction,
                abbreviation
            )
        ]
    }
}