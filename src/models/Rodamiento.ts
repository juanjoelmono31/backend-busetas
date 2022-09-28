import { Schema, model } from "mongoose";

const rodamientoSchema = new Schema({
    numero_buseta: {
        type: String
    },

    hora: {
        type: String
    },

    numero_rodamiento: {
        type: String
    },

    lugar: {
        type: String
    },

    fecha: {
        type: String
    }
},{
    versionKey: false,
    timestamps: true
})

export default model ('Rodamiento', rodamientoSchema)