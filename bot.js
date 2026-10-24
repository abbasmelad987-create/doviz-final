const http = require('http');

// هاد السيرفر مشان Render يضل شايفو شغال
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Live - doviz-bot is running!');
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// هون فيك تحط كود البوت تبعك تحت
console.log("Bot started successfully");