import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: this.zeros(new Date().getHours()) + ":" + this.zeros(new Date().getMinutes()) + ":" +
                this.zeros(new Date().getSeconds())
        });
    }

    zeros(i) {
        if (i < 10) {
            return "0" + i;
        } else {
            return i;
        }
    }

    getFormat() {
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth();
        let days = myDate.getDate();
        let day = myDate.getDay();
        let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
        return (dayArray[day] + " "+ days + " "+ monthArray[month] + " " + year);
    }

    render() {
        return <p className="App-clock">{this.getFormat()} <br/>
                <span>{this.state.time}</span>
               </p>;
    }
}

export default Clock;