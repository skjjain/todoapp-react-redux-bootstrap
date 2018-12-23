export const ADD_TODO = 'ADD_TODO';
export const REM_TODO = 'REM_TODO';
export const DONE_TODO = 'DONE_TODO';
export const LIST_TODO = 'LIST_TODO';
export const ALL_TODOS = 'ALL_TODOS';
export const LOADING = 'LOADING';


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

export function addAllTodos(todos){
    return {
        type:ALL_TODOS,
        payload: todos
    };
}

export function loadingData(){
    return {
        type:LOADING,
        payload: true
    };
}


function fetchAllTodos() {
    return fetch('https://my-json-server.typicode.com/skjjain/todoapp-react-redux-bootstrap/todos');
}
export function fetchTodos(){
    return (dispatch) => {
        dispatch(loadingData());
        return fetchAllTodos().then(response => response.json()).then((todos) => dispatch(addAllTodos(todos)));
    };
}