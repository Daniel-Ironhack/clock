import React from 'react';

class Relogio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),time : 1000};
    }
    // function that do setInterval
    clock(){
      this.interval = setInterval(()=>{this.setState({date:new Date()})},this.state.time)
    }

    // after the mount do this
    componentDidMount() {
      //if the interval dont have value call the function clock with the value of the time 
      console.log('componentDidMount')
      if(!this.interval){
        this.clock()
      }
    }
  
    // if the state was change, after the change clear the value of the interval and call clock with the new time value
    componentDidUpdate() {
      console.log('componentDidUpdate')
      clearInterval(this.interval)
       this.clock()
    }
  
    render() {
console.log('reder')

      return (
        <div>
         
          <p>{this.props.name}===={'>'}{this.state.time} </p>
          <h2>It is {this.state.date.toLocaleTimeString("en-US",{timeZone: this.props.country})}.</h2>
          {/*\ this button triger the componentDidUpdate make it double */}
          <button onClick={()=>{this.setState({time:this.state.time*2})}}>double</button>
          {/*\ this button triger the componentDidUpdate return the value to 1 seg*/}
          <button onClick={()=>{this.setState({time:1000})}}>reset</button>
        </div>
      );
    }

  }

  export default Relogio
