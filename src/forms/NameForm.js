import React from "react";
import form from "./form.css";
import Clock from "./Clock";


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', remove: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.notes = [];
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value !== "") {
            this.notes.push(this.state.value);
            localStorage.setItem(String(Date.now()), this.state.value);
            this.setState({value: ""})
    }}

    removeClick(item) {
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
    };

    render() {
        this.getResult()
        return (
            <div>
                <NoteStructure handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                               removeClick={this.removeClick} res={this.res} state={this.state}/>
            </div>);
    }}

export default NameForm;

function NoteStructure(props) {
    return (<div>
        <div className="wide">
            <div className="main-container">
                <div className="top">
                    <div className="title">
                        <h1 id="date"><Clock /> </h1>
                        <h2>You've got <span className="total__items">{props.res.length} </span> to do today!</h2>
                </div>
                <button className="add_btn" onClick={props.handleSubmit}>+</button>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="add">
                <div className="add__container">
                    <input type="text" className="add__description"
                           placeholder="What would you like to do today?"
                    required="True" value={props.state.value} onChange={props.handleChange}/>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row" >
                {props.res.map(todo => {
                    return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="notes">
                            <div className="todos"><textarea rows="5" cols="12" value={localStorage.getItem
                            (localStorage.key(props.res.indexOf(todo)))}/>
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

    </div>);
}


function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}