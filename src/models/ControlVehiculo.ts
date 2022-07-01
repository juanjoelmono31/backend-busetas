import { Schema, model, Document } from 'mongoose';

const ctrlVehiculos = new Schema({
    fecha: {
        type: Date
    },

    ruta: {
        type: Number
    },

    numero_vueltas: {
        type: Number
    },

    numero_buseta: {
        type: Number
    },

    reg_salida: {
        type: Number
    },

    reg_llegada: {
        type: Number
    },

    gastos: {
        type: Object
    },

    total_gastos: {
        type: Number
    },

    neto_total: {
        type: Number
    },

    conductor: {
        type: String
    },
    
    placa: {
        type: String
    }
})

export default model('CtrlVehiculos', ctrlVehiculos)