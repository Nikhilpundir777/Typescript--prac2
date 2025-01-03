import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoListProps={
    items:{id:string,text:string}[];
    onRemoveTodo:(todoId:string)=>void;

}


const TodoList = ({items,onRemoveTodo}:TodoListProps) => {
  return (
    <div className="w-3/4 mx-auto">
        {
            items.map(todo=>
                <Card><CardHeader>
                    <CardTitle className="flex gap-5 items-center">
                        {todo.text}
                        <Button className="w-fit" onClick={()=>onRemoveTodo(todo.id)}>Delete</Button>
                    </CardTitle>
                    

                    
                    </CardHeader>
                    
                    
                    </Card>
            )
        }
    </div>
  )
}

export default TodoList