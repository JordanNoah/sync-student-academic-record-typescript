export class OrganizationDto {
    private constructor(
        public uuid: string,
        public name: string,
        public fullname: string,
        public abbreviation: string,
        public domain: string,
        public token: string,
        public website: string,
        public rest_path: string,
        public modality: string,
        public translations: string
    ) {}

    static create(object: {[key:string]:any}):[string?,OrganizationDto?]{
        const {
            uuid,
            name,
            fullname,
            abbreviation,
            domain,
            token,
            website,
            rest_path,
            modality,
            translations
        } = object

        return [
            undefined,
            new OrganizationDto(
                uuid,
                name,
                fullname,
                abbreviation,
                domain,
                token,
                website,
                rest_path,
                modality,
                translations
            )
        ]
    }
}