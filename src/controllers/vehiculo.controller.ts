import Vehiculo from "../models/Vehiculo";
import {Request, Response} from 'express';

//Creacion de conductor 
export async function creatVehiculo(req: Request, res: Response): Promise<Response> {
    const {placa, propietario, modelo, numero, poliza, mantenimiento_taller, rodamiento, netoTotal, pico_placa, estado, gastos_admin } = req.body

    const newVehiculo = {
        placa: placa, propietario: propietario, modelo: modelo, numero: numero, 
        mantenimiento_taller: mantenimiento_taller, rodamiento, netoTotal, pico_placa: pico_placa, estado: estado, 
        tarjeta_propiedad: req.file?.path, gastos_admin: gastos_admin
    }

    const vehiculo = new Vehiculo(newVehiculo)
    await vehiculo.save()

    return res.json({
        message: true,
        vehiculo
    })
}

//Buscar conductor
export async function findAllVehiculos(req: Request, res: Response): Promise<Response> {
    
    const vehiculo = await Vehiculo.find().sort('-createdAt')
    return res.json(vehiculo)
}

//Buscar vehiculo por id
export async function findOneVehiculo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const vehiculo = await Vehiculo.findById(id)

    return res.json(vehiculo)
}

//Borrar conductor por id 
export async function deleteVehiculo(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const vehiculo = await Vehiculo.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     vehiculo
    })
 }

 //Actulizar campos
 
 export async function updateMantenimiento(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { mantenimiento_taller  } = req.body
    const updatedMantenimiento = await Vehiculo.findByIdAndUpdate(id, {
        mantenimiento_taller
    })

    return res.json({
        message: 'Succesfully update mantenimiento',
        updatedMantenimiento
    })
}

//Update rodamiento
export async function updateRodamiento(req: Request, res: Response){
    const { id } = req.params
    const { rodamiento} = req.body
    const updatedRodamiento = await Vehiculo.findByIdAndUpdate(id, {
        rodamiento
    })

    return res.json({
        message: 'Succesfully update',
        updatedRodamiento
    })
}
// update campo valor suma Neto total busetas para valores diarios 

export async function updateNetoTotal(req: Request, res: Response){
    const { id } = req.params
    const { gastos_admin} = req.body
    const updateNetoTotal = await Vehiculo.findByIdAndUpdate(id, {
        gastos_admin
    })

    return res.json({
        message: 'Succesfully update',
        updateNetoTotal
    })
}

//update pico y placa con estado
export async function updatePico_placaYestado(req: Request, res: Response) {
    const { id } = req.params
    const {pico_placa, estado} = req.body
    const updatedPico_placaYestado = await Vehiculo.findByIdAndUpdate(id, {
        pico_placa,
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedPico_placaYestado
    })
    
}

//update Estado
export async function updateEstado(req: Request, res: Response) {
    const { id } = req.params
    const {estado} = req.body
    const updatedEstado = await Vehiculo.findByIdAndUpdate(id, {
        estado
    })

    return res.json({
        message: 'Succesfully update',
        updatedEstado
    })
}


//update gatsos admin por placa 
export async function updateGastosAdmin(req: Request, res: Response) {
    const { id } = req.params
    const {gastos_admin } = req.body
    const updatedGastosAdmin = await Vehiculo.findByIdAndUpdate(id, {
        gastos_admin
        
    })

    return res.json({
        message: 'Succesfully update gastos',
        updatedGastosAdmin
    })
    
}

//update mantenimiento y taller 
// export async function updateMantenimiento_taller(req: Request, res: Response){
//     const { id } = req.params
//     const { mantenimiento_taller} = req.body
//     const updatedMantenimiento_taller = await Vehiculo.findByIdAndUpdate(id, {
//         mantenimiento_taller
//     })

//     return res.json({
//         message: 'Succesfully update mantenimiento y taller ',
//         updatedMantenimiento_taller
//     })
// }

