import {MoodleWsFunctionSequelize} from "../../models/MoodleWsFunction";
import MoodleWsFunctionSeederData from "../data/moodleWsFunctionSeeder.data";
import {MoodleWsFunctionDto} from "../../../../domain/dtos/moodleWsFunction.dto";


export class MoodleWsFunctionSeederExec {
    public async up(){
        const moodleWsFunctions = MoodleWsFunctionSeederData;
        for (let i = 0; i < moodleWsFunctions.length; i++){
            const [error, moodleWsFunctionDto] = MoodleWsFunctionDto.create(moodleWsFunctions[i])
            if (error) throw Error(error)
            const moodleFunction = moodleWsFunctionDto!
            await MoodleWsFunctionSequelize.findOrCreate({
                where:{
                    function:moodleFunction.moodleFunction
                },
                defaults:{
                    abbreviation:moodleFunction.abbreviation,
                    function:moodleFunction.moodleFunction
                }
            })
        }
    }

    public async down(){
        await MoodleWsFunctionSequelize.sync({force:true})
    }
}