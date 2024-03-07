import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

interface EventReceivingQueueLogRow {
    id: number,
    event_receiving_queue_id: number,
    status_transaction_catalog_id: number,
    createdAt?:Date,
    updatedAt?:Date
}

export class EventReceivingQueueLogSequelize extends Model<EventReceivingQueueLogRow, Omit<EventReceivingQueueLogRow, 'id'>> {
    declare id: number
    declare event_receiving_queue_id: number
    declare status_transaction_catalog_id: number
    declare readonly createdAt: Date
    declare readonly updatedAt: Date
}

EventReceivingQueueLogSequelize.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    event_receiving_queue_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status_transaction_catalog_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'event_receiving_queue_log'
})