import { deleted } from "../actions";

const deleteTodo = (todoId) =>{
    return async(dispatch) =>{
            await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "DELETE",
            body: JSON.stringify({
                id: todoId
            }),
        })

        dispatch(deleted(todoId))
    }
}

export default deleteTodo