import React from "react";
import form from "./form.css";
import Clock from "./Clock";
import Todo from "./Todo";


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', remove: ''};
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});

    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.value !== "") {
        localStorage.setItem(String(Date.now()), this.state.value);
        this.setState({value: ""})
    }}

    removeClick = (item) => {
      for (let i=0; i<=this.res.length-1; i++) {
        if (this.res[i].props.children === item.props.children) {
          let del = localStorage.key(i);
          localStorage.removeItem(String(del));
          this.res.splice(i);
        }
      }
      this.setState({value: ""})
    }

    getResult() {
      this.res = []
      for (let i = 0; i<=localStorage.length; i++) {
        const note = localStorage.getItem(localStorage.key(i));
        this.res.push(<div>{note}</div> );
        }
      this.res.pop();
      if (this.res.length > 1)
          this.s = "s";
      else
          this.s = "";
    };



    render() {
      this.getResult()
      return (
        <div>
          <div className="wide">
            <div className="main-container">
              <div className="top">
                <div className="title">
                  <h1 id="date">
                    <Clock />
                  </h1>
                  <h2>You've got
                    <span className="total__items"> {this.res.length}</span> thing{this.s} to do today!
                  </h2>
                </div>
                <button className="add_btn" onClick={this.handleSubmit}>+</button>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="add">
              <div className="add__container">
                <input type="text" className="add__description"
                       placeholder="What would you like to do today?"
                       required="True" value={this.state.value} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
            <div className="container-fluid">
              <div className="row" >
                <div className="container-fluid">
                  <div className="row">{this.res.map(todo => <Todo key={this.res.indexOf(todo)} todo={todo}
                                                                   res={this.res} removeClick={this.removeClick} />)}
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
  }
  }

export default NameForm;
