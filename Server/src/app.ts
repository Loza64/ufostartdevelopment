import cors from 'cors';
import morgan from 'morgan'
import express, { Request, Response } from 'express';
import BodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import fileUpload from 'express-fileupload';
import Routes from './router/routes';
import { Cors, HelmetConfig, LimiterConfig } from './config';
import GetConnection from './connection/database';

const Application = express();

GetConnection()

Application.use(morgan('dev'))
Application.use(cors(Cors))
Application.use(HelmetConfig)
Application.disable('x-powered-by')
Application.use(rateLimit(LimiterConfig))
Application.use(BodyParser.json({ limit: "100mb" }))
Application.use(BodyParser.urlencoded({ limit: "100mb", extended: true }))
Application.use(fileUpload({ useTempFiles: true, tempFileDir: './Upload' }))
Application.use('/backend/api/rest/ufostartserver/route/fetch/axios', Routes)
Application.get('/favicon.ico', (req: Request, res: Response) => { res.status(204).end() });

export default Application;