import React, { Component } from 'react';
import {connect} from  'react-redux';
import {addTodo} from '../../Actions/todoActions';
class AddTodo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
        );
    }
}
AddTodo = connect ( )(AddTodo);
export default AddTodo;