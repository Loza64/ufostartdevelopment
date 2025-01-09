import {createServer}from 'http'
import { PORT, Server } from './config'
import Application from './app'

const server = createServer(Application)

server.listen(PORT, () => {
  Server(`is running on port ${PORT}`)
})