import { supabase } from '../utils/supabaseClient.js';

// Obtener todos los registros de "Money"
export const getAllMoney = async (req, res) => {
  const { user } = req.query;

  // Verificar si se pasó el parámetro de usuario
  if (!user) {
    return res.status(400).json({ error: 'El parámetro user es requerido' });
  }

  const { data, error } = await supabase.from('Money').select('*').eq('user', user);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};

// Agregar un nuevo registro a "Money"
export const addMoney = async (req, res) => {
  const { name, type, amount, note = "", user } = req.body;
  const { data, error } = await supabase
    .from('Money')
    .insert([{ name, type, amount, note, user }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ data });
};

// Actualizar un registro existente en "Money"
export const updateMoney = async (req, res) => {
  const { id } = req.params;
  const { name, type, amount, note,  user } = req.body;

  const { data, error } = await supabase
    .from('Money')
    .update({ name, type, amount, note, user })
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ data });
};

// Eliminar un registro existente en "Money"
export const deleteMoney = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('Money')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(204).send();
};
