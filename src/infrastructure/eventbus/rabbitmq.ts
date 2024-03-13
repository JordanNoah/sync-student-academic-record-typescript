import {Channel, connect, Connection} from "amqplib"
import {assertExchange, assertQueue, config} from './config'
import AppConfig from "../../domain/config"

export class Rabbitmq {
    private static _connection: Connection
    private static _channel: Channel

    public static async connection() {
        this._connection = await connect(config)
        this._channel = await this._connection.createConfirmChannel()
    }

    public static async setQueue() {
        await this._channel.assertQueue(
            AppConfig.RABBIT_QUEUE,
            assertQueue
        )

        await this._channel.assertExchange(
            AppConfig.RABBIT_EXCHANGE,
            AppConfig.RABBIT_TYPE_EXCHANGE,
            assertExchange
        )

        await this._channel.bindQueue(
            AppConfig.RABBIT_QUEUE,
            AppConfig.RABBIT_EXCHANGE,
            AppConfig.RABBIT_ROUTING_KEY
        )

        await this._channel.prefetch(Number(AppConfig.RABBIT_PREFETCH))
    }

    public static async consume() {
        await this._channel.consume(
            AppConfig.RABBIT_QUEUE,
            async (msg) => {
                try {

                } catch (error) {
                    console.log(error)
                }
            }
        )
    }
}