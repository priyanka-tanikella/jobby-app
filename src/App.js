import './App.css'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import Jobs from './components/Jobs'
import Profile from './components/Profile'
import JobItemDetails from './components/JobItemDetails'

import LoginForm from './components/LoginForm'

import ProtectedRoute from './components/ProtectedRoute'
// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/pro" component={Profile} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
