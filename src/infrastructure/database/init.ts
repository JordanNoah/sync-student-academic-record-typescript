import {sequelize} from "./sequelize";

export const DbSequelize = (): Promise<void> => {
    return new Promise((resolve, reject)=>{
        sequelize.sync({force:false}).then(()=>{
            resolve()
        }).catch((err) => {
            console.error(err)
            reject()
        })
    })
}