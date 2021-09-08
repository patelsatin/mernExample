import { Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import { Switch } from 'react-router-dom';
import Logout from './components/Logout';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/useReducer';
export const UserContext=createContext();
function App() {
    
    const [state, dispatch]=useReducer(reducer,initialState);
  return (
    <div >
        <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <Switch>
    <Route exact path="/">
        <Home />
    </Route >
    <Route exact path="/portfolio">
        <Portfolio />
    </Route>
    <Route exact path="/about">
        <About />
    </Route>
    <Route path="/contact">
        <Contact />
    </Route>
    <Route path="/login">
        <Login />
    </Route>
    <Route path="/signup">
        <Signup />
    </Route>
    <Route path="/logout">
        <Logout />
    </Route>
    <Route >
        <ErrorPage />
    </Route>
    </Switch>
    </UserContext.Provider>
</div>
  );
}

export default App;
