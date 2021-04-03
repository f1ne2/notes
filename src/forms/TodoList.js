import React from "react";

function TodoList(props) {
    return (
      <div>
        <div className="container-fluid">
          <div className="row" >
              {props.res.map(todo => {
                return (
                  <div className="col-xs-9 col-sm-6 col-md-4 col-lg-3">
                    <div className="notes">
                      <div className="todos"><textarea rows="5" cols="12" value={localStorage.getItem
                        (localStorage.key(props.res.indexOf(todo)))} readOnly/>
                      </div>
                    <div className="block">
                      <button type="button" className="close" onClick={() =>
                        props.removeClick(todo)}>🗑️
                      </button>
                    </div>
                    </div>
                  </div>)})}
          </div>
        </div>
      </div>
    );
}

export default TodoList;
