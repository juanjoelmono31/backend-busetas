import { Router } from 'express';
import * as rutasController from '../controllers/rutas.controller';

const router = Router()

//
router.post('/', rutasController.createRutas)

//
router.get('/', rutasController.findAllRutas)