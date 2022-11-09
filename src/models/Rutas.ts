import { Schema, model } from "mongoose";

const rutasSchema = new Schema({
    numero: {
        type: String
    },

    lugar: {
        type: String
    }
})

export default model ('Rutas', rutasSchema)