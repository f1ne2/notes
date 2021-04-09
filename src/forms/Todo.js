import React from "react";

class Todo extends React.Component {
  render() {
    return (
        <div className="notes">
          <div className="todos"><textarea rows="5" cols="12" value={localStorage.getItem
            (localStorage.key(this.props.res.indexOf(this.props.todo)))} readOnly/>
              <div className="block">
                  <button type="button" onClick={() =>
                      this.props.removeClick(this.props.todo)}>🗑️
                  </button>
              </div>
          </div>

        </div>
      );
    }}

export default Todo;