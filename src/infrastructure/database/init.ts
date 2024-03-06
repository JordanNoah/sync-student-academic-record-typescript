import {sequelize} from "./sequelize";

export const DbSequelize = (): Promise<void> => {
    return new Promise((resolve, reject)=>{
        sequelize.sync().then(()=>{
            resolve()
        }).catch((err) => {
            console.error(err)
            reject()
        })
    })
}