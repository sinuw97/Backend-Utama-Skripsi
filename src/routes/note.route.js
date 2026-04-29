import express from 'express';
import verifyToken from "../middlewares/auth.middleware.js";
import {
  getAllNoteController,
  getNotesByIdController,
  editNoteController,
  deleteNoteController,
  postNewNoteController,
} from "../controllers/note.controller.js";

const notesRouter = express.Router();

// Semua route notes wajib pake JWT
notesRouter.get("/", verifyToken, getAllNoteController);
notesRouter.get("/:id", verifyToken, getNotesByIdController);
notesRouter.post("/add", verifyToken, postNewNoteController);
notesRouter.put("/edit/:id", verifyToken, editNoteController);
notesRouter.delete("/delete/:id", verifyToken, deleteNoteController);

export default notesRouter;