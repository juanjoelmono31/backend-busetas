import Vehiculo from "../models/Vehiculo";
import {Request, Response} from 'express';

//Creacion de conductor 
export async function creatVehiculo(req: Request, res: Response): Promise<Response> {
    const {placa, propietario, modelo, conductor } = req.body

    const newVehiculo = {
        placa: placa, propietario: propietario, modelo: modelo, conductor: conductor, 
        tarjeta_propiedad: req.file?.path
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

//Buscar conductor por id
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

