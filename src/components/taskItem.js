import React from 'react';
import {Button} from 'react-bootstrap';

export default class TaskItem extends React.Component{
    render() {
        
        return (
            <li className="list-group-item">
              {this.props.children}
              <div style={{float:'right'}}>
              {this.props.type === 'pending' ? <Button style={{marginRight:'5pt'}} bsSize="xsmall" bsStyle="success"  onClick={() => this.props.doneTask(this.props.children)}>Done</Button> : ''}
              <Button style={{marginRight:'5pt'}} bsSize="xsmall" bsStyle="danger" onClick={() => this.props.deleteTask(this.props.children, this.props.type)}>Delete</Button>
              </div>
            </li>
          );
    }
}
