import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Home} from './Home'
import {Discover} from './Discover'

export const Header = () => <nav id="navbar">
    <div class="container">
    <h1 class="logo" style={{fontSize: "1.4em"}}>UCSB Club Recommender</h1>
    <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/discover'}>Discover</Link></li>
    </ul>
    </div>
</nav>

export const Main = () => <Switch>
    <Route exact path='/' component = {Home}/>
    <Route path='/discover' component = {Discover}/>
</Switch>