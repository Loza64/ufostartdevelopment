"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = require("../controller/messages");
const projects_1 = require("../controller/projects");
const result_1 = require("../middleware/result");
const message_1 = require("../validators/message");
const projects_2 = require("../validators/projects");
const router = express_1.default.Router();
//Post
router.post('/new/message', message_1.ValidateMessage, result_1.validate, messages_1.Message);
router.post('/upload/project', projects_2.ValidateProject, result_1.validate, projects_1.NewProject);
//Get
router.get('/get/projects', projects_1.GetProjecs);
//Patch
router.patch('/add/detail/project/:id', projects_2.ValidateDetailProject, result_1.validate, projects_1.DetailProject);
exports.default = router;
//# sourceMappingURL=routes.js.map