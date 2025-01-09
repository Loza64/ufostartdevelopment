import express from 'express';
import { Message } from "../controller/messages"
import { DetailProject, GetProjecs, NewProject } from '../controller/projects';
import { validate } from '../middleware/result'
import { ValidateMessage } from '../validators/message'
import { ValidateDetailProject, ValidateProject } from '../validators/projects';

const router = express.Router();

//Post
router.post('/new/message', ValidateMessage, validate, Message);
router.post('/upload/project', ValidateProject, validate, NewProject);

//Get
router.get('/get/projects', GetProjecs);

//Patch
router.patch('/add/detail/project/:id', ValidateDetailProject, validate, DetailProject)

export default router;