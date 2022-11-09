import { Router } from 'express';
import * as rutasController from '../controllers/rutas.controller';

const router = Router()

//http://localhost:3000/rutas
router.post('/', rutasController.createRutas)

//http://localhost:3000/rutas
router.get('/', rutasController.findAllRutas)

export default router;