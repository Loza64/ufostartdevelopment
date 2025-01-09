"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailProject = exports.NewProject = exports.GetProjecs = void 0;
const fs_extra_1 = require("fs-extra");
const projects_1 = require("../model/projects");
const cloudinary_1 = __importDefault(require("../libraries/cloudinary"));
const GetProjecs = async (req, res) => {
    try {
        const proyectos = await (0, projects_1.GetProjects)();
        res.status(200).json(proyectos);
    }
    catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
};
exports.GetProjecs = GetProjecs;
const NewProject = async (req, res) => {
    const data = req.body;
    const image = req.files?.photo;
    try {
        const { public_id, url } = await (0, cloudinary_1.default)(image.tempFilePath);
        data.image = { public_id, url };
        const save = await (0, projects_1.SaveProject)(data);
        if (!save) {
            res.status(500).json({ state: false, details: "Error al subir el proyecto" });
            return;
        }
        res.status(200).json({ state: false, details: "Project sucess uploaded." });
    }
    catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
    finally {
        (0, fs_extra_1.remove)(image.tempFilePath);
    }
};
exports.NewProject = NewProject;
const DetailProject = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const file = req.files?.photo;
    try {
        const { public_id, url } = await (0, cloudinary_1.default)(file.tempFilePath);
        const add = await (0, projects_1.AddDetailProject)(id, { name, image: { public_id, url } });
        if (!add) {
            res.status(500).json({ state: false, details: "Error al agregar el detalle al proyecto" });
            return;
        }
        res.status(200).json({ state: false, details: "Detail project sucess uploaded." });
    }
    catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
    finally {
        (0, fs_extra_1.remove)(file.tempFilePath);
    }
};
exports.DetailProject = DetailProject;
//# sourceMappingURL=projects.js.map