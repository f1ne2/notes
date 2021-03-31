import React from "react";
import form from "./form.css";
import backGround from "./238482300080212.png";


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        remove: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.notes = [];
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        event.preventDefault();
        this.notes.push(this.state.value)
        alert('Note added: ' + this.state.value);
        localStorage.setItem(String(Date.now()), this.state.value);
        this.setState({value: ""});

    }

    removeClick(item) {
        for (let i=0; i<=this.res.length-1; i++) {
            if (this.res[i].props.children === item.props.children) {
                let del = localStorage.key(i);
                alert (localStorage.getItem(del) + "Removed")
                localStorage.removeItem(String(del));
                this.res.splice(i)
            }
        }
        this.setState({value: ""})
    }

    render() {
        this.res = []
        for (let i = 0; i<=localStorage.length; i++) {
            const note = localStorage.getItem(localStorage.key(i));
            this.res.push(<div>{note}</div> );
        }
        this.res.pop()
        return (
            <div>
                <div id="wide">
            <form className="enter" onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="Enter Note" required="True"
                              value={this.state.value}
                              onChange={this.handleChange} /></label>
                <button type="submit" className="btn waves-effect waves-light btn-grd-primary ">Add note</button>
            </form>
                </div>
            <div className="container-fluid">
            <div className="row">
                {this.res.map(todo => {
                return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="notes">
                        <img src={backGround} className="img-fluid" />
                        <div className="todos"><textarea rows="5" cols="10"
                                                         value={localStorage.getItem(localStorage.key(this.res.indexOf(todo)))}/>
                        </div>
                        <div className="block">
                            <button type="button" className="close" onClick={() =>
                                this.removeClick(todo)}>&times; remove
                            </button>
                        </div>
                    </div>
                </div>)})}
                </div>
            </div>
            </div>
        );}}
export default NameForm;
