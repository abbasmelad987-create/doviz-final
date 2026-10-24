const express=require('express');
const app=express();
const PORT=process.env.PORT||10000;
app.get('/',(req,res)=>res.send('Bot is Live - Doviz Final Working!'));
app.listen(PORT,()=>console.log('Server live on '+PORT));