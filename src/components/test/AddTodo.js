import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/first';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    e.preventDefault();
    const inputEle = this.textInput.current;
    const val = inputEle.value.trim();
    if (!val) return;
    console.log(val);
    const { dispatch } = this.props;
    dispatch(addTodo(val));
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          <input type="text" ref={this.textInput} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
const AddTodoContainer = connect()(AddTodo);
export default AddTodoContainer;
