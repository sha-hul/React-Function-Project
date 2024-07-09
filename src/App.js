import logo from './logo.svg';
import './App.css';
import Welcome from './Session67/Welcom';
import { useState } from 'react';
import Counter from './Session67/Counter';
import OddEven from './Session67/OddEven';
import { ConditionalRender } from './Session67/ConditionalRender';
import BookAppointment from './Session67/BookAppointment';
import { Session8 } from './Session8/Index';
import RouteLayout from './Session8/RouteLayout';
import { Effects } from './Session10/Effects';
function App() {
  const [name, setName] = useState("");
  const [component, setComponent] = useState(true);
  const setempName = (e) => {
    setName(e.target.value);
  }
  const displayComponent = () => {
    setComponent((prevsta) => ( !prevsta ))
  }
  console.log(component)
  return (
    <div>
      {/* <h2>UseState</h2>
    <input type='text' onChange={setempName}/>  */}
      {/* <Welcome ename={name} day={'Albatross1'} /> */}
      {/* <Counter ename = {name} day={'Albatross1'} /> */}
      {/* <ConditionalRender/> */}
      {/* <BookAppointment/> */}
      {/* <Session8/> */}
      {/* <RouteLayout/> */}
      <button onClick={displayComponent} >Display component</button>
       {(component) && <Effects />}
    </div>
  );
}

export default App;