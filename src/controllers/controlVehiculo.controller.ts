import CtrlVehiculos from '../models/ControlVehiculo'
import {Request, Response} from 'express';

//Creacion de control 
export async function creatCtrlVehiculo(req: Request, res: Response): Promise<Response> {
    const {fecha, ruta, numero_vueltas, numero_buseta, placa,
        reg_salida, reg_llegada, gastos, total_gastos, neto_total } = req.body

    const newCtrlVehiculo = {
        fecha: fecha, ruta: ruta, numero_vueltas: numero_vueltas, numero_buseta: numero_buseta, placa: placa,
        reg_salida: reg_salida, reg_llegada: reg_llegada, gastos: gastos, total_gastos: total_gastos,
        neto_total: neto_total
    }

    const ctrlVehiculos = new CtrlVehiculos(newCtrlVehiculo)
    await ctrlVehiculos.save()

    return res.json({
        message: 'Conductor creado',
        ctrlVehiculos
    })
}

//Buscar control de vehiculo
export async function findAllCtrlVehiculos(req: Request, res: Response): Promise<Response> {
    
    const ctrlVehiculos = await CtrlVehiculos.find().sort('-createdAt')
    return res.json(ctrlVehiculos)
}

//Buscar conductor por id
export async function findOneCtrlVehiculos(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const ctrlVehiculos = await CtrlVehiculos.findById(id)

    return res.json(ctrlVehiculos)
}

//Borrar conductor por id 
export async function deleteCtrlVehiculos(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const ctrlVehiculos = await CtrlVehiculos.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     ctrlVehiculos
    })
 }