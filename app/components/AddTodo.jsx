var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <div><input type ="text" ref="todoText" placeholder="What do you need to do?"/></div>
          <div><button className="button expanded">Add</button></div>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
