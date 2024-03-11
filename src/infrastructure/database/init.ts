import {OrganizationSequelize} from "./models/Organization";
import {MoodleWsFunctionSequelize} from "./models/MoodleWsFunction";
import {EventReceivingQueueSequelize} from "./models/EventReceivingQueue";
import {EventReceivingQueueLogSequelize} from "./models/EventReceivingQueueLog";
import {StatusTransactionCatalogSequelize} from "./models/StatusTransactionCatalog";
import {RequestToMoodleLogSequelize} from "./models/RequestToMoodleLog";
import {OrganizationSeederExec} from "./seeders/execute/organizationSeeder.exec";
import {MoodleWsFunctionSeederExec} from "./seeders/execute/moodleWsFunctionSeeder.exec";

export const DbSequelize = (): Promise<void> => {
    return new Promise(async (resolve, reject)=>{
        try {
            await OrganizationSequelize.sync()
            await MoodleWsFunctionSequelize.sync()
            await StatusTransactionCatalogSequelize.sync()
            await EventReceivingQueueSequelize.sync()
            await EventReceivingQueueLogSequelize.sync()
            await RequestToMoodleLogSequelize.sync()

            //seeders
            await new OrganizationSeederExec().up()
            await new MoodleWsFunctionSeederExec().up()
            resolve()
        }catch (e) {
            reject(e)
        }
    })
}