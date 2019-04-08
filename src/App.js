import React from 'react'
import {observer} from 'mobx-react'
import {Header, Main} from './Navigation'

const App = observer(() => (
  <div>
    <Header/>
    <Main/>
  </div>
))

export default App