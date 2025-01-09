import { remove } from "fs-extra";
import { AddDetailProject, GetProjects, SaveProject } from "../model/projects";
import UploadImage from "../libraries/cloudinary";
import { Request, Response } from "express";
import { project_body } from "../model/projects.js";
import { UploadedFile } from "express-fileupload";

export const GetProjecs = async (req: Request, res: Response) => {
    try {
        const proyectos = await GetProjects()
        res.status(200).json(proyectos)
    } catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
};

export const NewProject = async (req: Request, res: Response) => {
    const data: project_body = req.body;
    const image = req.files?.photo as UploadedFile
    try {
        const { public_id, url } = await UploadImage(image.tempFilePath)
        data.image = { public_id, url }
        const save = await SaveProject(data)
        if (!save) {
            res.status(500).json({ state: false, details: "Error al subir el proyecto" });
            return
        }
        res.status(200).json({ state: false, details: "Project sucess uploaded." });
    } catch (error) {
        res.status(500).json({ state: false, details: error.message });
    } finally {
        remove(image.tempFilePath);
    }
};

export const DetailProject = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name } = req.body
    const file = req.files?.photo as UploadedFile
    try {
        const { public_id, url } = await UploadImage(file.tempFilePath)
        const add = await AddDetailProject(id, { name, image: { public_id, url } })
        if (!add) {
            res.status(500).json({ state: false, details: "Error al agregar el detalle al proyecto" })
            return
        }
        res.status(200).json({ state: false, details: "Detail project sucess uploaded." });
    } catch (error) {
        res.status(500).json({ state: false, details: error.message });
    }
    finally {
        remove(file.tempFilePath)
    }
}