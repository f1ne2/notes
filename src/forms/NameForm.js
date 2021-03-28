import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
            idDel: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteChange = this.deleteChange.bind(this);
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
    deleteChange(event) {    this.setState({idDel: event.target.value})  }
    handleClick(event) {
        alert('Deleted: ' + this.state.idDel);
        let d = localStorage.key(this.state.idDel);
        localStorage.removeItem(String(d))
        new NameForm().this.render()
        event.preventDefault();
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea placeholder="Enter Note" rows="5" wrap="hard" cols="22" required="True"
                              value={this.state.value}
                              onChange={this.handleChange} /></label>
                <br/>
                <button type="submit" className="btn btn-primary">Add note</button>
            </form>
            <form onSubmit={this.handleClick}>
                <label>
                    <input type="text" placeholder="Enter ID" size={6} required="True" value={this.state.idDel}
                           onChange={this.deleteChange} />
                </label>
                <button type="submit" className="btn btn-dark">Delete</button>
            </form>
            <div className="container-fluid">
            <div className="row">
                {this.res.map(todo => {
                return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div style={{backgroundColor: '#E0FFFF'}}>
                    ID={this.res.indexOf(todo)}{todo} </div><div style={{backgroundColor: '#FFFFFF'}}><br/></div>
                </div>)})}
                </div>
            </div>
            </div>
        );}}
export default NameForm;
