import { User, Note } from "../models/index.js";

// Tampilkan semua notes yg dimiliki
const getAllNotes = async (userId) => {
  const notes = await Note.findAll({
    where: { user_id: userId },
  });

  return notes;
};

// Tampilkan notes by id
const getNoteById = async (id, userId) => {
  const note = await Note.findByPk(id);
  if (!note) throw new Error('Notes tidak ditemukan!');

  if (note.user_id !== userId) throw new Error('Tidak memiliki akses untuk notes ini.')
  return note;
};

// Add notes baru
const postNewNote = async (userId, data) => {
  return await Note.create({ user_id: userId, ...data });
};

// Edit notes
const editNote = async (id, userId, data) => {
  const note = await Note.findByPk(id);
  if (!note) throw new Error('Notes tidak ditemukan!');

  if (note.user_id !== userId) throw new Error('Tidak memiliki akses untuk notes ini.');
  await note.update(data);
  
  return note;
};

// Hapus notes
const deleteNoteById = async (id, userId) => {
  const note = await Note.findByPk(id);

  if (!note) throw new Error('Notes tidak ditemukan!');
  if (note.user_id !== userId) throw new Error('Tidak memiliki akses untuk notes ini.');

  await note.destroy();
  return { message: 'Notes berhasil dihapus!' };
}

export {
  getAllNotes,
  getNoteById,
  postNewNote,
  editNote,
  deleteNoteById
}