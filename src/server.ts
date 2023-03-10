import express from "express";
import dotenv from 'dotenv'
import path from "path";
import mainRoutes from './routes/index'

dotenv.config()

const server = express()

server.set('views', path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, '../public/')))


//Routes
server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada!')
})



server.listen(process.env.PORT)