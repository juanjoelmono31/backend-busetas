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
        type: Object
    },

    mantenimiento: {
        type: Object
    },

    taller: {
        type: Object
    },

    netoTotal: {
        type: Number
    },

    // conductor: {
    //     type: String
    // },

    tarjeta_propiedad: {
        type: String
    },

    pico_placa: {
        type: Object
    },

    estado: {
        type: String
    },

    gastos_admin: {
        type: Object
    }
    
})

export default model('Vehiculo', vehiculoSchema)