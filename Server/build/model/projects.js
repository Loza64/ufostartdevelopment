"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDetailProject = exports.SaveProject = exports.GetProjects = void 0;
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    public_id: { type: String, required: true },
    url: { type: String, required: true }
}, { _id: false });
const detailSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: imageSchema
}, { _id: false });
const projectSchema = new mongoose_1.Schema({
    type: { type: String, enum: ['Web', 'Desktop', 'Movil'], required: true, trim: true },
    title: { type: String, required: true, trim: true },
    image: { type: imageSchema, required: true },
    description: { type: String, required: true, trim: true },
    details: { type: [detailSchema], required: true, default: [] }
}, { versionKey: false });
const project = (0, mongoose_1.model)('projects', projectSchema);
const GetProjects = async () => {
    try {
        return await project.find();
    }
    catch (error) {
        throw new Error('Error fetching projects');
    }
};
exports.GetProjects = GetProjects;
const SaveProject = async (data) => {
    try {
        const newProject = new project(data);
        return await newProject.save();
    }
    catch (error) {
        throw new Error('Error saving project');
    }
};
exports.SaveProject = SaveProject;
const AddDetailProject = async (id, data) => {
    try {
        if (!(0, mongoose_1.isValidObjectId)(id))
            return null;
        return await project.findByIdAndUpdate(id, { $push: { details: data } }, { new: true });
    }
    catch (error) {
        throw new Error('Error adding detail to project');
    }
};
exports.AddDetailProject = AddDetailProject;
//# sourceMappingURL=projects.js.map