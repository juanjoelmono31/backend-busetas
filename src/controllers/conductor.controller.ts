import Conductor from "../models/Conductor";
import {Request, Response} from 'express';

//Creacion de conductor 
export async function creatConductor(req: Request, res: Response): Promise<Response> {
    const {nombre, numero_celular, cedula } = req.body

    const newConductor = {
        nombre: nombre, numero_celular: numero_celular, cedula: cedula
    }

    const conductor = new Conductor(newConductor)
    await conductor.save()

    return res.json({
        message: 'Conductor creado',
        conductor
    })
}

//Buscar conductor
export async function findAllConductor(req: Request, res: Response): Promise<Response> {
    
    const conductor = await Conductor.find().sort('-createdAt')
    return res.json(conductor)
}

//Buscar conductor por id
export async function findOneConductor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const conductor = await Conductor.findById(id)

    return res.json(conductor)
}

//Borrar conductor por id 
export async function deleteConductor(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const conductor = await Conductor.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     conductor
    })
 }

