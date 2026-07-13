import React from 'react'
import GlobalContext from './GlobalContext'
import ComponentB from './ComponentB'

function ComponentA() {
    const message = `this is a message from component A` ;
    const name = `this is a name from component A` ;
  return (
    <div>
        <h1>This is Component A</h1>
        <GlobalContext.Provider value={{ message, name }}>
            <ComponentB />
        </GlobalContext.Provider>
    </div>
  )
}

export default ComponentA