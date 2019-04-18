import {Schema, model, Document, ConnectionBase} from 'mongoose'

interface UserInterface extends Document{
    nome: String,
    ra:   String,
}

const UserSchema = new Schema({
    nome: String,
    ra:   String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export default model<UserInterface>('User', UserSchema);