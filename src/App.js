import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import './App.css';
import Checkout from './Components/Checkout'
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'

function App() {
  const [{user}, dispatch] = useStateValue();
  //useEffect 
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
          //then user is logged in...

          dispatch({
            type: "SET_USER",
            user: authUser
          })
      } else {
          //then user is lgged out...
        
          dispatch({
            type:"SET_USER",
            user: null
          })
      }
    })
    return () => {
      // Any cleanup  operation  go in here...abs
      unsubscribe()
    }
  }, [])

  console.log("User IS>>>>>", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/** This Is The default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/** localhost.com/ */}
        {/** localhost.com/checkout */}
        {/** localhost.com/login */}
      </div>
    </Router>
    
  );
}

export default App;
