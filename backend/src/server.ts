import Fastify from "fastify"
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: ['query']
})

async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true
    })

    fastify.get('/heathcheck', () => {
        return { status: 'OK'}
    })

    await fastify.listen({ port: 3001, host: '0.0.0.0' })
}

bootstrap()