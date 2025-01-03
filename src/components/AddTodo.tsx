import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


type AddTodoProps={
    onAddTodo:(todoText:string)=>void
}


const AddTodo = ({onAddTodo}:AddTodoProps) => {
    const [text,setText]=useState<string>("");

    const submitHandler=(event:FormEvent)=>{
        event.preventDefault();
        onAddTodo(text);


    }
  return (
    <form className="flex items-center gap-5 m-5" onSubmit={submitHandler}>
        <Input type="text" placeholder="Add your Tasks"  onChange={(e:ChangeEvent<HTMLInputElement>)=>setText(e.target.value)}/>
        <Button>Add Tasks</Button>

    </form>
  )
}

export default AddTodo;