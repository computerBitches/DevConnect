
import express from 'express'
const app = express();
app.get('/',(req,res)=>res.send('API Runnning'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`));