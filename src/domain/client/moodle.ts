import {Http} from "./http";
import {UserEntity} from "../entities/moodle/user.entity";
import {CoreUserGetUserDto} from "../dtos/moodle/coreUserGetUser.dto"
import {AxiosHeaders, AxiosResponse} from "axios";
import {CoreCourseGetCoursesByFieldDto} from "../dtos/moodle/coreCourseGetCoursesByField.dto";

interface MoodleOptions {
    wstoken: string,
    wsfunction: string,
    moodlewsrestformat: string
}

export class Moodle extends Http {
    private readonly configParams: MoodleOptions
    constructor(baseUrl: string,wsfunction:string='',wstoken:string='',moodlewsrestformat:string = 'json') {
        super(baseUrl);
        this.setHeaders({"Content-Type": "application/x-www-form-urlencoded"})
        this.configParams = {
            wstoken: wstoken,
            wsfunction: wsfunction,
            moodlewsrestformat: moodlewsrestformat
        }
    }

    public setToken(wstoken:string){
        this.configParams.wstoken = wstoken
    }

    public setFunction(wsfunction:string){
        this.configParams.wsfunction = wsfunction
    }

    private async sendRequest(data:object): Promise<any> {
        const response = await this.post(data)
        console.log(response)
        if(Object.keys(response!).includes('errorcode')){
            throw new Error('Moodle has found an error')
        }

        return response
    }

    async coreUserGetUsers(coreUserGetUserDto: CoreUserGetUserDto): Promise<UserEntity> {
        this.setFunction('core_user_get_users')
        const data = { ...this.configParams, criteria: coreUserGetUserDto.criteria}
        return await this.sendRequest(data)
    }

    async coreCourseGetCoursesByField(coreCourseGetCoursesByFieldDto: CoreCourseGetCoursesByFieldDto): Promise<any> {
        this.setFunction('core_course_get_courses_by_field')
        const data = { ...this.configParams, field: coreCourseGetCoursesByFieldDto.field, value:coreCourseGetCoursesByFieldDto.value}
        return await this.sendRequest(data)
    }
    async coreEnrolGetUsersCourses(): Promise<any> {
        this.setFunction('core_enrol_get_users_courses')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupAddGroupMembers(): Promise<any>{
        this.setFunction('core_group_add_group_members')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupAssignGrouping(): Promise<any>{
        this.setFunction('core_group_assign_grouping')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupCreateGroupings(): Promise<any>{
        this.setFunction('core_group_create_groupings')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupCreateGroups(): Promise<any>{
        this.setFunction('core_group_create_groups')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupDeleteGroupMembers(): Promise<any>{
        this.setFunction('core_group_delete_group_members')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupGetCourseGroupings(): Promise<any>{
        this.setFunction('core_group_get_course_groupings')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupGetCourseGroups(): Promise<any>{
        this.setFunction('core_group_get_course_groups')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupGetCourseUserGroups(): Promise<any>{
        this.setFunction('core_group_get_course_user_groups')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupGetGroupMembers(): Promise<any>{
        this.setFunction('core_group_get_group_members')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreGroupUpdateGroups(): Promise<any>{
        this.setFunction('core_group_update_groups')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreRoleAssignRoles(): Promise<any>{
        this.setFunction('core_role_assign_roles')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreUserCreateUsers(): Promise<any>{
        this.setFunction('core_user_create_users')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreUserGetUsersByField(): Promise<any>{
        this.setFunction('core_user_get_users_by_field')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async coreUserUpdateUsers(): Promise<any>{
        this.setFunction('core_user_update_users')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async enrolManualEnrolUsers(): Promise<any>{
        this.setFunction('enrol_manual_enrol_users')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async enrolManualUnenrolUsers(): Promise<any>{
        this.setFunction('enrol_manual_unenrol_users')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async localAdditionalWebServiceGetGroupsByIdnumber(): Promise<any>{
        this.setFunction('local_additional_web_service_get_groups_by_idnumber')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async localAdditionalWebServiceGetUsersCourses(): Promise<any>{
        this.setFunction('local_additional_web_service_get_users_courses')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
    async localWsgetrolesGetRoles(): Promise<any>{
        this.setFunction('local_wsgetroles_get_roles')
        const data = {...this.configParams}
        return await this.sendRequest(data)
    }
}