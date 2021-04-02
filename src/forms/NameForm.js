import React from "react";
import form from "./form.css";
import backGround from "./238482300080212.png";


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
        this.notes.push(this.state.value);
        localStorage.setItem(String(Date.now()), this.state.value);
        this.setState({value: ""})
    }

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
        <div id="wide">
        <form className="enter" onSubmit={props.handleSubmit}>
            <label>
                <input placeholder="Enter Note" required="True"
                       value={props.state.value}
                       onChange={props.handleChange} />
            </label>
            <button type="submit" className="btn waves-effect waves-light btn-grd-primary ">Add note</button>
        </form>
    </div>
        <div className="container-fluid">
            <div className="row">
                {props.res.map(todo => {
                    return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="notes">
                            <img src={backGround} className="img-fluid" />
                            <div className="todos"><textarea rows="5" cols="11" value={localStorage.getItem
                            (localStorage.key(props.res.indexOf(todo)))}/>
                            </div>
                            <div className="block">
                                <button type="button" className="close" onClick={() =>
                                    props.removeClick(todo)}>&times; remove
                                </button>
                            </div>
                        </div>
                    </div>)})}
            </div>
        </div>
    </div>);

}