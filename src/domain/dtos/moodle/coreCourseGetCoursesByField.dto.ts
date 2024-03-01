export class CoreCourseGetCoursesByFieldDto {
    private constructor(
        public field: string,
        public value: string
    ) {}

    static create(object:{[key:string]:any}):[string?,CoreCourseGetCoursesByFieldDto?]{
        const {
            field,
            value
        } = object

        return [
            undefined,
            new CoreCourseGetCoursesByFieldDto(
                field,
                value
            )
        ]
    }

    toJson(): {field: string, value: string} {
        return {
            field: this.field,
            value: this.value
        }
    }
}