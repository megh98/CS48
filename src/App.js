import React from 'react'
import {observer} from 'mobx-react'
import {Header, Main} from './Navigation'

const App = observer(() => (
  <div style={{fontSize: "1.4em"}}>
    <Header/>
    <Main/>
  </div>
))

export default App