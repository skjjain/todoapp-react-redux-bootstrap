import { combineReducers } from "redux";
import {ADD_TODO,REM_TODO, LOADING, DONE_TODO,ALL_TODOS} from './actions';
const initialState = {todos:[], task:'', todos_completed:[], error:false, errorInfo:'', loading:false};
function todoActions(state = initialState, action){
    const newState = {...state};
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
        break;
        

        case REM_TODO: 
            
            if(action.payload.type === 'done'){
                newState.todos_completed = newState.todos_completed.filter(i => i !== action.payload.text);
            }else{
                newState.todos = newState.todos.filter(i => i !== action.payload.text);
            }
            
        break;
        

        case DONE_TODO: 
            
            newState.todos = newState.todos.filter(i => i !== action.payload);
            newState.todos_completed = [...newState.todos_completed,action.payload];
            

        break;

        case LOADING: 
            newState.loading = true;
        break;

        case ALL_TODOS: 
            newState.todos = action.payload.pending;
            newState.todos_completed = action.payload.completed;
            newState.loading = false;
        break;
        
        default : {
            return state;
        }
        
    }
    return newState;
}


var todoApp = combineReducers({todoActions});

export default todoApp;