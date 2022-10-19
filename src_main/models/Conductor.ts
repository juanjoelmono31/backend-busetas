import { Schema, model, Document } from 'mongoose';

const conductorSchema = new Schema({
    nombre: {
        type: String
    },

    numero_celular: {
        type: Number
    },

    cedula: {
        type: Number,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Conductor', conductorSchema)