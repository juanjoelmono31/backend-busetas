import Rutas from '../models/Rutas';
import {Request, Response} from 'express';

//Crear ruta 
export async function createRutas(req: Request, res: Response) {
    const {numero, lugar} = req.body

    const newRuta = {
        numero: numero, lugar: lugar
    }

    const ruta = new Rutas(newRuta)
    await ruta.save()

    res.json({
        message: true,
        ruta
    })
    
}

//Buscar rutas
export async function findAllRutas(req: Request, res: Response) {
    const ruta = await Rutas.find().sort('-createdAt')
    res.json(ruta)
    
}