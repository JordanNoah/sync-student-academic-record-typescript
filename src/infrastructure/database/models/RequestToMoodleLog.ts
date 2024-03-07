import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

interface RequestToMoodleLogRow {
    id: number,
    payload: string,
    processed: boolean,
    response_detail: string,
    moodle_ws_function_id: number,
    organization_id:number,
    event_receiving_queue_log_id:number,
    createdAt?:Date,
    updatedAt?:Date
}

export class RequestToMoodleLogSequelize extends Model<RequestToMoodleLogRow, Omit<RequestToMoodleLogRow, 'id'>> {
    declare id: number
    declare payload: string
    declare processed: boolean
    declare response_detail: string
    declare moodle_ws_function_id: number
    declare organization_id: number
    declare event_receiving_queue_log_id: number
    declare readonly createdAt: Date
    declare readonly updatedAt: Date
}

RequestToMoodleLogSequelize.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    payload:{
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    processed:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    response_detail:{
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    moodle_ws_function_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    event_receiving_queue_log_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    organization_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    timestamps:true,
    paranoid: true,
    tableName: 'request_to_moodle_log'
})