
import React from 'react'
import User from './User'
import providers from './context/Providers'
import masterProvider from './StateManager/masterProvider'

const App = (props) => {
    return (
      <User {...props}/>
    )
}

export default masterProvider(App, providers)