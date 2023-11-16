import React,{ Component } from "react";
class Stopwatch extends Component{
    state={
        time:0,
        reset:false
    }

    updateInterval = ()=>{        
        this.interval = setInterval(()=>{
            var second = parseInt(this.state.time);
            this.setState({
                time:second+1
            })
        },1000);
    }


    constructor(){
        super();
    }

    componentDidMount(){
        this.updateInterval();
    }

    componentDidUpdate(){
        if(this.state.reset){
            this.setState({time:0, reset:false})
        }
        clearInterval(this.interval)
        this.updateInterval();
    }

   reset = ()=>{
        this.setState({reset:true})
    }

    render(){
        return(
            <>
                <h1>{this.state.time}</h1>
                <button onClick={this.reset}>Reset</button>
            </>

        )
    }
}

export default Stopwatch;