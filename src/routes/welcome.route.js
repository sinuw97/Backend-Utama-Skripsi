import express from 'express';

export const welcomeRouter = express.Router();

welcomeRouter.get('/', (req, res) => {
  res.json({
    message: "Selamat datang di rute welcome",
  }).status(200);
});