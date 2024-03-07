import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

interface EventReceivingQueueRow {
    id: number,
    uuid: string,
    received_data: string,
    processed_at: Date,
    attempts: number,
    event_name: string,
    scheduled_at: Date,
    createdAt?:Date,
    updatedAt?:Date
}

export class EventReceivingQueueSequelize extends Model<EventReceivingQueueRow,Omit<EventReceivingQueueRow, 'id'>> {
    declare id: number
    declare uuid: string
    declare received_data: string
    declare processed_at: Date
    declare attempts: number
    declare event_name: string
    declare scheduled_at: Date
    declare createdAt:Date
    declare updatedAt:Date
}

EventReceivingQueueSequelize.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    uuid:{
        type: DataTypes.STRING,
        allowNull:false
    },
    received_data:{
        type: DataTypes.TEXT('long'),
        allowNull:false
    },
    processed_at:{
        type: DataTypes.DATE,
        allowNull:true
    },
    attempts:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    event_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    scheduled_at:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'event_receiving_queue'
})