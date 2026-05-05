// netlify/functions/api.js (CommonJS)
'use strict';

exports.handler = async (event, context) => {
  const { default: app } = await import('../../src/app.js');
  const { default: sequelize } = await import('../../src/configs/database.js');
  const serverless = await import('serverless-http');

  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error('DB connection failed', err);
  }

  const handler = serverless.default(app);
  return handler(event, context);
};