import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Statecomponent from './Statecomponent';
import { Styledcomponent } from './Styledcomponent';
import { Bootstrapexample } from './Bootstrapexample';
import { Matiralexample } from './Matiralexample';
import { Reactapp } from './Reactapp';
import { Reactwelcome } from './Reactwelcome';
import { Reactprops } from './Reactprops';
import { ReactCounter } from './ReactCounter';
import { ReactFunctioncomponent } from './ReactFunctioncomponent';

import Content from './Content';
import Navbar from './Navbar';
import { Usestatepractical } from './Usestatepractical';




function App() {
  let a=20
  let b=35

  const name="abc"
  let age=25
  let salary=25000


  return (
    <>
   <div>
    <h3>First react project </h3>
    <h4>A is {a}</h4>
    <h4>B is {b}</h4>
    <h4>Addition is {a+b}</h4>
   </div>

   <Firstcomponent/>
   <Secondcomponent myname={name} myage={age} sal={salary}/>

   <Statecomponent/>
   <Styledcomponent />
   <Bootstrapexample/>
   <Matiralexample/>
   <Reactapp/>
   <Reactwelcome/>
   <Reactprops name="janki mulani" age={21} location="Junagadh"/>
   <ReactCounter/>
   <Navbar />
   <Content/>
   <Usestatepractical/>
   
   
   
</>


   );
}

export default App;
