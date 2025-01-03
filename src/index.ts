import express, { NextFunction, Request, Response } from 'express';
import todoroutes from './routes/todo';

const app=express();
app.use(express.json());



app.use("/todos",todoroutes)


//middleware to handle any other requests 

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{

    res.status(500).json({message:err.message})

})


app.listen(3000,()=>{
    console.log('server listening')
})