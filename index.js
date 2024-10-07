import express from 'express';
import cors from 'cors'; // Importar cors
import expensesRoutes from './routes/expenses.js';
import moneyRoutes from './routes/money.js';

const app = express();
app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json());

// Usar las rutas
app.use('/api/expenses', expensesRoutes);
app.use('/api/money', moneyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
