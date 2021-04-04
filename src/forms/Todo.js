import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div className="col-xs-9 col-sm-6 col-md-4 col-lg-3">
        <div className="notes">
          <div className="todos"><textarea rows="5" cols="12" value={localStorage.getItem
            (localStorage.key(this.props.res.indexOf(this.props.todo)))} readOnly/>
          </div>
          <div className="block">
            <button type="button" className="close" onClick={() =>
              this.props.removeClick(this.props.todo)}>🗑️
            </button>
          </div>
        </div>
      </div>);
    }}

export default Todo;