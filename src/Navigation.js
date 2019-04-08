import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Home} from './Home'

export const Header = () => <div>
    <Link to={'/'}>
        Home
    </Link>
</div>

export const Main = () => <Switch>
    <Route exact path='/' component = {Home}/>
</Switch>