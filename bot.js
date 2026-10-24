const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/', (req,res) => res.send('Bot Live - Ready for WhatsApp!'));
app.listen(PORT, () => console.log('Server OK on ' + PORT));