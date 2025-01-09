import { model, Schema } from 'mongoose'

export interface IMessage {
    ip: string
    key: string
    name: string
    email: string
    business: string
    date: string
    message: string
}

const messageSchema = new Schema<IMessage>({
    ip: { type: String, require: true },
    key: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    business: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
}, { versionKey: false });


const message = model<IMessage>("messages", messageSchema)

export const SaveMessage = async (data:IMessage)=>{
    try {
        const newMessage = new message(data)
        return await newMessage.save()
    } catch (error) {
        throw new Error("Error saving message")
    }
}

export const GetMessages = async () =>{
    try {
        return await message.find()
    } catch (error) {
        throw new Error("Error fetching messages")
    }
}