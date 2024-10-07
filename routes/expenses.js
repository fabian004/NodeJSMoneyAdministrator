import express from 'express';
import {
  getAllExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/expensesController.js';

const router = express.Router();

// Ruta para obtener todos los registros de "Expenses"
router.get('/', getAllExpenses);

// Ruta para agregar un nuevo registro a "Expenses"
router.post('/', addExpense);

// Ruta para actualizar un registro existente en "Expenses"
router.put('/:id', updateExpense);

// Ruta para eliminar un registro existente en "Expenses"
router.delete('/:id', deleteExpense);

export default router;
