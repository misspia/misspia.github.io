import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './routes';
import Landing from '../components/Landing';
import Projects from '../components/Projects';

import * as S from './Router.styles';

// https://hoang.moe/
// https://thibautfoussard.com/
export default function AppRouter({ }) {
  return (
    <Router>
      <>
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path={Routes.HOME} component={Landing} />
            <Route exact path={Routes.PROJECTS} component={Projects} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        )}>
        </Route>
      </>
    </Router>
  )
}
