import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';
import Posts from './components/Posts/Posts';
const Users = lazy(() => import('./components/Users/Users')) 

function App() {

  return (
    <BrowserRouter>
      <main>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Posts}  />
        <Route path="/users" render={() =>
          <Suspense fallback={<h1>Loading....</h1>}>
          <Users /></Suspense>
        }/>
      </Switch>
      </main>
    </BrowserRouter>
    );
}

export default App;
