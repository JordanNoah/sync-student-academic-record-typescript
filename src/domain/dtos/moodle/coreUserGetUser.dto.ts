export class CoreUserGetUserDto {
    private constructor(
        public criteria: Criteria[]
    ) {}
    static create(object:{[key:string]:any}):[string?,CoreUserGetUserDto?]{
        const {
            criteria
        } = object

        return [
            undefined,
            new CoreUserGetUserDto(
                criteria
            )
        ]
    }
}

class Criteria {
    private constructor(
        public key: string,
        public value: string
    ) {}
}