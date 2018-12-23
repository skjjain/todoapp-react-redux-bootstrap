import React, { Component } from 'react';
import { FormGroup, FormControl, ListGroup, HelpBlock, Panel, PageHeader, ProgressBar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addTodo, removeTodo, doneTodo} from '../data/actions';
import TaskItem from '../components/taskItem';



class Home extends Component{

    constructor(props){
        super(props);
        this.taskRef = React.createRef();
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.onTodoEnter(this.taskRef.current.value);
        this.taskRef.current.value = "";
    }


    deleteTask = (task, type) => {
        this.props.onTaskRemove(task, type);
    }

    doneTask = (task) => {
        this.props.onTaskDone(task);
    }

    getValidationState = () => {
        if(this.props.errorInfo === ''){
            return null;
        }
        return this.props.error ? 'error':'success';
    }



    renderTodos = (todos, type = 'pending') => {
        if(this.props.loading){
            return (<Panel.Body><ProgressBar bsStyle="success" active now={100} label='Loading...' /></Panel.Body>);
        }
        if(todos.length === 0){
            if(type === 'pending'){
                return (<Panel.Body>No task added!!!</Panel.Body>);
            }else{
                return (<Panel.Body>No task completed yet!!!</Panel.Body>);
            }
        }
        return (<ListGroup>
            {todos.map((todo) => (<TaskItem type={type} key={todo} deleteTask={this.deleteTask} doneTask={this.doneTask}>{todo}</TaskItem>))}
        </ListGroup>);
    }

    render(){
        
        return (
            <div>
                <PageHeader>
                    Todo App <small>React+Redux+Bootstrap</small>
                </PageHeader>
                <form className="form" onSubmit={this.submitForm}>
                    <FormGroup validationState={this.getValidationState()}>
                        <FormControl autoFocus  inputRef={this.taskRef}  type="text" placeholder="Enter some task here..."/>  
                        <FormControl.Feedback />
                        <HelpBlock>{this.props.errorInfo}</HelpBlock>
                    </FormGroup>
                </form>
                <Panel>
                    <Panel.Heading>Incomplete Tasks</Panel.Heading>
                    {this.renderTodos(this.props.todos)}
                </Panel>
                
                <Panel>
                    <Panel.Heading>Completed Tasks</Panel.Heading>
                    {this.renderTodos(this.props.todos_completed, 'done')}
                </Panel>

            </div>
        );
    }
}

var mapStateToProps = (state) => {
    return {
        ...state.todoActions
    }
}


const mapDispatchToProps = dispatch => {
    return {
      onTodoEnter: text => {
        dispatch(addTodo(text))
      },
      onTaskRemove: (text, type) => {
        dispatch(removeTodo({text, type}))
      },
      onTaskDone: text => {
        dispatch(doneTodo(text))
      }
    }
  }

  


export default connect(mapStateToProps, mapDispatchToProps)(Home);