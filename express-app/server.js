const expess = require('express')

// app init
const app = expess()

// port number 
const PORT = 8000;

// http://localhost:8000
app.listen(PORT, ()=>{
    console.log('Server start in http://localhost:8000');
})