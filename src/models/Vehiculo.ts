import { Schema, model, Document } from 'mongoose';

const vehiculoSchema = new Schema({
    placa: {
        type: String
    },

    propietario: {
        type: String
    },

    modelo: {
        type: String
    }, 

    conductor: {
        type: String
    },

    tarjeta_propiedad: {
        type: String
    }
})

export default model('Vehiculo', vehiculoSchema)