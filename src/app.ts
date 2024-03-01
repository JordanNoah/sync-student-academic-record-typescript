import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import AppConfig from './domain/config'

(() => {
    main()
})()

function main(){
    new Server({port:AppConfig.PORT,routes:AppRoutes.routes}).start()
}