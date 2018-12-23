import { combineReducers } from "redux";
import {ADD_TODO,REM_TODO, LIST_TODO, DONE_TODO} from './actions';
const initialState = {todos:[], task:'', todos_completed:[], error:false, errorInfo:''};
function todoActions(state = initialState, action){
    let newState = {...state};
    switch(action.type){
        case ADD_TODO: 
            
            if(action.payload === ''){
                newState.error = true;
                newState.errorInfo = 'Task is required field!!!';
            }else if(newState.todos.indexOf(action.payload) === -1){
                newState.todos = [...newState.todos,action.payload];
                newState.error = false;
                newState.errorInfo = 'Successfully Added';
            }else{
                newState.error = true;
                newState.errorInfo = 'Task is already added!!!';
            }
            return newState;
        

        case REM_TODO: 
            
            if(action.payload.type === 'done'){
                newState.todos_completed = newState.todos_completed.filter(i => i !== action.payload.text);
            }else{
                newState.todos = newState.todos.filter(i => i !== action.payload.text);
            }
            
            return newState;
        

        case DONE_TODO: 
            
            newState.todos = newState.todos.filter(i => i !== action.payload);
            newState.todos_completed = [...newState.todos_completed,action.payload];
            return newState;
        

        case LIST_TODO: 
            return state;
        
        default : {
            return state;
        }
    }
}


var todoApp = combineReducers({todoActions});

export default todoApp;