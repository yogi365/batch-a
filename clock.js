import React from "react";
class Clock extends React.Component{
    state = {
        time:new Date()
    }
    constructor(){
        super();
    }

    componentDidMount(){
       this.interval=
        setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }

    componentDidUpdate(){
        console.log("state updated");
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        console.log('Clock component unmounted');
    }
    
    render() {
        return (
            <>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </>    
        )
    }
}

export default Clock;