import { RequestHandler } from "express";
import { Todo } from "../models/todo";

//array of objects of id and text
// const TODO:Todo[]=[{id:"11",text:"1st todo"}];

const TODO: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
  const { text } = req.body;

  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);
  res.status(201).json({ message: "Todo created", newTodo });
};

export const getTodo: RequestHandler = (req, res) => {
  res.json({TODO}).status(200)
};

export const updateTodo:RequestHandler<{todoId:string}>=(req,res)=>{
    const todoId=req.params.todoId;
    const {text}=req.body;

    const todoIndex=TODO.findIndex((todo)=>todo.id===todoId);

    if(todoIndex<0){
        throw new Error('Todo not Found')

    }

    TODO[todoIndex]=new Todo(TODO[todoIndex].id,text);
    res.status(200).json({message:"Todo updated",newTodo:TODO[todoIndex]});
}


export const deleteTodo:RequestHandler<{todoId:string}>=(req,res)=>{
    const todoId=req.params.todoId;
    const todoIndex=TODO.findIndex((todo)=>todo.id===todoId);

    if(todoIndex<0){
        throw new Error('Todo not Found')

    }

    TODO.splice(todoIndex,1);
    res.status(200).json("Todo deleted")

}