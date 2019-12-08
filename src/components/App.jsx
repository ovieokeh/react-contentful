import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Posts from './posts/Posts'
import SinglePost from './single-post/SinglePost'

export default function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/:id" component={SinglePost} />
      </Switch>
    </Router>
  )
}
