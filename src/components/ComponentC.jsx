import React, { useContext } from 'react'
import GlobalContext from './GlobalContext'


function ComponentC() {
  const data = useContext(GlobalContext);
  return (
    <div>
        <h1>This is Component C</h1>
        <h2>Message: {data.message}</h2>
        <h2>Name: {data.name}</h2>

    </div>
  )
}

export default ComponentC