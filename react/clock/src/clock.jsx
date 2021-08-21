import React from 'react';
import './clock.css';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            hours:"",
            seconds:"",
            minutes:""
            }
         this.tick=this.tick.bind(this);   
            ;
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        
       const date=new Date();
       const {hourDiff}=this.props;
       const {minDiff}=this.props;
       date.setHours(date.getHours()+hourDiff);
       date.setMinutes(date.getMinutes()+minDiff);

       let hours=this.timeFormat(date.getHours());
       let minutes=this.timeFormat(date.getMinutes());
       let seconds=this.timeFormat(date.getSeconds());
       this.setState({hours,minutes,seconds});
      }

    timeFormat(time){
        return time < 10 ? `0${time}`:time;
    }
render() { 
    const {hours,minutes,seconds}=this.state;
    const hoursStyle={
        transform:`rotate(${hours * 30}deg)`
    };
    const minutesStyle={
        transform:`rotate(${minutes*6}deg)`
    };
    const secondsStyle={
        transform:`rotate(${seconds*6}deg)`
    };
    
    const {title}=this.props; 
    return (  
       
<div className={"clock"}>
    <h3>Analog Clock with Digital Display</h3>
    <h3>{title}</h3>
    <div className={"analog-clock"}>
        <div className={"hand seconds"} style={secondsStyle} />
        <div className={"hand minutes"} style={minutesStyle} />
        <div className={"hand hours"} style={hoursStyle} />
    </div>
    <div className={"digital-display"}>
        <h2>Time:-{hours}:{minutes}:{seconds} </h2>
        </div>
</div>

 );
}
}


