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
        OrganizationSequelize.sync().catch(() => {reject()})
        MoodleWsFunctionSequelize.sync().catch(() => {reject()})
        EventReceivingQueueSequelize.sync().catch(() => {reject()})
        EventReceivingQueueLogSequelize.sync().catch(() => {reject()})
        StatusTransactionCatalogSequelize.sync().catch(() => {reject()})
        RequestToMoodleLogSequelize.sync().catch(() => {reject()})

        //associations
        EventReceivingQueueSequelize.hasMany(EventReceivingQueueLogSequelize,{foreignKey:'event_receiving_queue_id', as:'eventReceivingQueue'})
        EventReceivingQueueLogSequelize.belongsTo(EventReceivingQueueSequelize,{foreignKey:'event_receiving_queue_id', as:'eventReceivingQueue'})

        StatusTransactionCatalogSequelize.hasMany(EventReceivingQueueLogSequelize,{foreignKey:'status_transaction_catalog_id', as:'statusTransactionCatalog'})
        EventReceivingQueueLogSequelize.belongsTo(StatusTransactionCatalogSequelize,{foreignKey:'status_transaction_catalog_id', as: 'statusTransactionCatalog'})

        RequestToMoodleLogSequelize.belongsTo(EventReceivingQueueLogSequelize,{foreignKey:'event_receiving_queue_log_id', as:'receivingQueueLog'})
        EventReceivingQueueLogSequelize.hasMany(RequestToMoodleLogSequelize,{foreignKey:'event_receiving_queue_log_id',as:'receivingQueueLog'})

        RequestToMoodleLogSequelize.belongsTo(OrganizationSequelize,{foreignKey:'organization_id', as:'organization'})
        OrganizationSequelize.hasMany(RequestToMoodleLogSequelize,{foreignKey:'organization_id', as:'organization'})

        RequestToMoodleLogSequelize.belongsTo(MoodleWsFunctionSequelize,{foreignKey:'moodle_ws_function_id', as:'moodleWsFunction'})
        MoodleWsFunctionSequelize.hasMany(RequestToMoodleLogSequelize,{foreignKey:'moodle_ws_function_id', as:'moodleWsFunction'})

        //seeders

        await new OrganizationSeederExec().up()
        await new MoodleWsFunctionSeederExec().up()
    })
}