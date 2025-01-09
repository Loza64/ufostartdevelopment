"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessages = exports.SaveMessage = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    ip: { type: String, require: true },
    key: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    business: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
}, { versionKey: false });
const message = (0, mongoose_1.model)("messages", messageSchema);
const SaveMessage = async (data) => {
    try {
        const newMessage = new message(data);
        return await newMessage.save();
    }
    catch (error) {
        throw new Error("Error saving message");
    }
};
exports.SaveMessage = SaveMessage;
const GetMessages = async () => {
    try {
        return await message.find();
    }
    catch (error) {
        throw new Error("Error fetching messages");
    }
};
exports.GetMessages = GetMessages;
//# sourceMappingURL=messages.js.map