const express = require('express');
const app = express();
app.get('/', (req,res) => res.send('Bot Live'));
app.listen(process.env.PORT || 10000, () => console.log('OK'));
