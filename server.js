import dotenv from 'dotenv'
dotenv.config()

import app from './src/app.js';
import sequelize from './src/configs/database.js';

const PORT = process.env.APP_PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server berjalan! http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("DB connection failed", error)
  }
}

startServer();