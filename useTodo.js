import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = () => {

    // const initialState = [];
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onNewTodo = (todo) => {

        const action = {
            type: "Add",
            payload: todo
        }

        dispatch(action);
    }

    const onRemove = (todo) => {
        
        dispatch({
            type: "Remove",
            payload: todo.id
        });
    }

    const onClickTodo = (todo) => {
        console.log(todo);
        dispatch({
            type: "Done",
            payload: todo.id
        });
    }
        
    return {
        todos, 
        onNewTodo, 
        onRemove, 
        onClickTodo, 
        pending: todos.filter(todo => !todo.done).length
    }
}