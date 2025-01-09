import { isValidObjectId, model, Schema } from "mongoose";

interface Image {
    public_id: string;
    url: string;
}

interface Detail {
    name: string;
    image: Image;
}

interface IProject {
    type: 'Web' | 'Desktop' | 'Movil';
    title: string;
    image: Image;
    description: string;
    details: Detail[];
}

const imageSchema = new Schema<Image>({
    public_id: { type: String, required: true },
    url: { type: String, required: true }
}, { _id: false });

const detailSchema = new Schema<Detail>({
    name: { type: String, required: true },
    image: imageSchema
}, { _id: false });

const projectSchema = new Schema<IProject>({
    type: { type: String, enum: ['Web', 'Desktop', 'Movil'], required: true, trim: true },
    title: { type: String, required: true, trim: true },
    image: { type: imageSchema, required: true },
    description: { type: String, required: true, trim: true },
    details: { type: [detailSchema], required: true, default: [] }
}, { versionKey: false });

const project = model<IProject>('projects', projectSchema);

export type project_body = Omit<IProject, "details">

export const GetProjects = async () => {
    try {
        return await project.find();
    } catch (error) {
        throw new Error('Error fetching projects');
    }
}

export const SaveProject = async (data: project_body) => {
    try {
        const newProject = new project(data);
        return await newProject.save();
    } catch (error) {
        throw new Error('Error saving project');
    }
}

export const AddDetailProject = async (id: string, data: Detail) => {
    try {
        if (!isValidObjectId(id)) return null;
        return await project.findByIdAndUpdate(id, { $push: { details: data } }, { new: true });
    } catch (error) {
        throw new Error('Error adding detail to project');
    }
}

