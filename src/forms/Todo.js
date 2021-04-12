import React from "react";

class Todo extends React.Component {
  render() {
    return (
          <div className="todos"><textarea rows="5" value={localStorage.getItem
            (localStorage.key(this.props.res.indexOf(this.props.todo)))} readOnly/>
              <div className="block">
                <button type="button" onClick={() =>
                    this.props.removeClick(this.props.todo)}>
                    <span>&#215;</span>
                </button>
              </div>
          </div>
      );
    }
}

export default Todo;