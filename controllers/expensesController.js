import { supabase } from '../utils/supabaseClient.js';

// Obtener todos los registros de "Expenses"
export const getAllExpenses = async (req, res) => {
  const { user } = req.query;

  // Verificar si se pasó el parámetro de usuario
  if (!user) {
    return res.status(400).json({ error: 'El parámetro user es requerido' });
  }
  const { data, error } = await supabase.from('Expenses').select('*').eq('user', user).order('id','desc');
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};

// Agregar un nuevo registro a "Expenses"
export const addExpense = async (req, res) => {
  const { name, note = "", amount, type, user } = req.body;
  const { data, error } = await supabase
    .from('Expenses')
    .insert([{ name, note, amount, type,user }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ data });
};

// Actualizar un registro existente en "Expenses"
export const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { name, note, amount, type, user } = req.body;

  const { data, error } = await supabase
    .from('Expenses')
    .update({ name, note, amount, type, user })
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ data });
};

// Eliminar un registro existente en "Expenses"
export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('Expenses')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(204).send();
};
