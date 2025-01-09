import { connect } from 'mongoose'
import { ConnectionDB, Database, Error } from '../config'

export default function GetConnection() {
    connect(ConnectionDB).then(() => {
        Database('connection established')
    }).catch((error) => {
        Error('connection failed', error)
    })
}