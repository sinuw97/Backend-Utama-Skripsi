import User from "./user.model.js";
import Note from "./notes.model.js";

// User punya banyak Note
User.hasMany(Note, {
  foreignKey: 'user_id',
  as: 'notes'
});

// setiap Note milik satu User
Note.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author'
});

export {
  User,
  Note
};