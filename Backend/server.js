const path = require('path')
require('dotenv').config()
const express = require('express')
const app = require('./src/app')

const port = process.env.PORT || 3000;
const _dirname =path.resolve()
app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})