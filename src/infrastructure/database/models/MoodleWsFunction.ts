import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

interface MoodleWsFunctionRow {
    id: number,
    function: string,
    abbreviation: string,
    createdAt?: Date,
    updatedAt?: Date
}

export class MoodleWsFunctionSequelize extends Model<MoodleWsFunctionRow,Omit<MoodleWsFunctionRow, 'id'>> {
    declare id: number
    declare function: string
    declare abbreviation: string
    declare readonly createdAt: Date
    declare readonly updatedAt: Date
}

MoodleWsFunctionSequelize.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    function:{
        type: DataTypes.STRING,
        allowNull: false
    },
    abbreviation:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    tableName: 'moodle_ws_function'
})