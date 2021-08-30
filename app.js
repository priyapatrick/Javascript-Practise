import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App(){
    const[show,setShow]=useState(true)
    return(
        <div className="App">
            {
                show?<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Frustic-welcome-sign-red-flower-hanging-distressed-antique-green-door-weathered-rose-bud-teal-blue-wooden-fence-43915475.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fwelcome.html&tbnid=bFO2X4uB3B-MkM&vet=12ahUKEwjsvabcifnwAhVDnksFHdgUDoUQMygAegUIARDZAQ..i&docid=hJFUzOOIc-VBMM&w=800&h=533&q=welcome%20ping%20images&ved=2ahUKEwjsvabcifnwAhVDnksFHdgUDoUQMygAegUIARDZAQ"></img>:null
            }
            
                <button onClick={()=>setShow(!show)}>Click Me</button>
            
        </div>
    );
    
}
export default App;

