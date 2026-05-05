import serverless from 'serverless-http';
import dotenv from 'dotenv';
dotenv.config();

// Connect DB dulu sebelum handler
import sequelize from '../../src/configs/database.js';
import app from '../../src/app.js';

// Authenticate DB sekali saat cold start
try {
  await sequelize.authenticate();
  console.log('Database connected');
} catch (err) {
  console.error('DB connection failed', err);
}

export const handler = serverless(app);