import './App.css'
import React, { useEffect, useState } from 'react'

import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import ProductList from './pages/ProductList'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
const url = 'http://localhost:8000/products/'

function App() {
    const user = true
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const response = await fetch(
            url
        )
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(users)
 
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    {user ? <Redirect to="/" /> : <LogIn />}
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/products/:catecory">
                    <ProductList />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
