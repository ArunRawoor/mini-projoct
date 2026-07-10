import {useState} from 'react'
import './FunctionalCompoEx.css'

function FunctionalCompoEx() {
    // let initialvalue = 10;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{textAlign:'center', marginTop:'20px'}} className='FunctionalCompoEx'>
     This is the FunctionalCompoEx
     {/* <img src="https://th.bing.com/th?id=ORMS.b8491b3e309a1659cc77065ce6002749&pid=Wdp&w=312&h=172&qlt=90&c=1&rs=1&dpr=1&p=0" alt="sunset" width="300px" height="200px"/> */}
      <h1 >Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default FunctionalCompoEx