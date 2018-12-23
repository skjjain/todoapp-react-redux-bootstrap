export const ADD_TODO = 'ADD_TODO';
export const REM_TODO = 'REM_TODO';
export const DONE_TODO = 'DONE_TODO';
export const LIST_TODO = 'LIST_TODO';


export function addTodo(text){
    return {
        type:ADD_TODO,
        payload: text
    };
}

export function removeTodo(obj){
    return {
        type:REM_TODO,
        payload: obj
    };
}

export function doneTodo(text){
    return {
        type:DONE_TODO,
        payload: text
    };
}

export function getTaskList(){
    return {
        type:LIST_TODO,
        payload: true
    };
}
