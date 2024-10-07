import express from 'express';
import {
  getAllMoney,
  addMoney,
  updateMoney,
  deleteMoney,
} from '../controllers/moneyController.js';

const router = express.Router();

// Ruta para obtener todos los registros de "Money"
router.get('/', getAllMoney);

// Ruta para agregar un nuevo registro a "Money"
router.post('/', addMoney);

// Ruta para actualizar un registro existente en "Money"
router.put('/:id', updateMoney);

// Ruta para eliminar un registro existente en "Money"
router.delete('/:id', deleteMoney);

export default router;
