import axios from 'axios';
import { ServerRoute } from "../SettingsEnv";

const ServerFetch = axios.create({
    baseURL: ServerRoute,
    timeout: 1000 * 60 * 3,
    headers: { 
        'Content-Type': 'application/json',
    },
    timeoutErrorMessage: "Server timeout has expired"
})

export const GetProjects = async () => await ServerFetch.get('/get/projects');
export const NewMessage = async (contact) => await ServerFetch.post('/new/message', contact)