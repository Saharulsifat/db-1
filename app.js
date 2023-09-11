//application configaration
const express = require('express');
const app = new express();
const router = require('./src/Routers/api');
const rateLimit =require ('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	max: 100,
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
	
})

app.use(limiter)






app.use('/api', router);

//undefined route config

app.use('*', (req, res )=>{
 res.status(404).json({status:'fail', data:'not found'})
})
module.exports=app;
