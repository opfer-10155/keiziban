import React from 'react'
import { render } from 'react-dom'
import UploadPage from './views/uploadPage'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const App = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={UploadPage} />
        {/* <Route path="/login"  component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/rooms"  component={Rooms}>
          <Route path=":roomId" component={Room} />
        </Route> */}
      </Switch>
    </div>
    {/* <div><Link to="/login">Login</Link></div> */}
  </BrowserRouter>
)

render(App, document.getElementById('app'))
