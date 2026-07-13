import { useState, useEffect } from 'react'

function UseEffects() {
  const [scends, setScends] = useState(0);

  useEffect(() => {
    console.log('useEffect called');
    const interval = setInterval(() => {
      setScends((prevScends) => prevScends + 1);
    }, 1000);
     return () => clearInterval(interval);
  }, []);//empty dependency array means the effect will run only once when the component mounts

  return (
    <div>
      <h1>This UseEffects Hooks: {scends}</h1>
    </div>
  )
}

export default UseEffects