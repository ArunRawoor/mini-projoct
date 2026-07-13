

function EventHandlers() {
    const handleClick = (event) => {
        console.log('Button clicked!', event.type);
        console.log('Button clicked!', event.target);
        // console.log('Button clicked!', event.clientX, event.clientY);


        
        
    };
  return (
    <div><h1>Event Handlers</h1>
    
    
    <button  onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandlers