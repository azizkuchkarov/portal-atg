const express = require('express');
const next = require('next');
const { Telegraf } = require('telegraf');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  const bot = new Telegraf('6440237773:AAGgYE7q1k6xlmyYYPqnAqfymoTYQC3gtAE');
  bot.use((ctx, next) => {
    console.log('Received message:', ctx.message.text);
    return next();
  });
  bot.launch();

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
