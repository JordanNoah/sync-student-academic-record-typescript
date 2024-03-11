import {MoodleWsFunctionEntity} from "../entities/moodleWsFunction.entity";
import {MoodleWsFunctionDto} from "../dtos/moodleWsFunction.dto";

export abstract class MoodleWsFunctionDatasource {
    abstract register(moodleWsFunctionDto: MoodleWsFunctionDto): Promise<MoodleWsFunctionEntity>
    abstract update(): Promise<MoodleWsFunctionEntity>
    abstract getById(): Promise<MoodleWsFunctionEntity | null>
    abstract getAll(): Promise<MoodleWsFunctionEntity[]>

    abstract deleteById(): Promise<MoodleWsFunctionEntity>
    abstract deleteByAbbreviation(): Promise<MoodleWsFunctionEntity>
}