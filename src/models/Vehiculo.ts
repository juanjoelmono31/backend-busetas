import { Schema, model, Document } from 'mongoose';

const vehiculoSchema = new Schema({
    placa: {
        type: String
    },

    numero: {
        type: Number
    },
    
    propietario: {
        type: String
    },

    modelo: {
        type: String
    }, 

    rodamiento:{
        type: String
    },

    poliza: {
        type: String
    },

    mantenimiento: {
        type: Object
    },

    taller: {
        type: Object
    },

    // conductor: {
    //     type: String
    // },

    tarjeta_propiedad: {
        type: String
    }
})

export default model('Vehiculo', vehiculoSchema)