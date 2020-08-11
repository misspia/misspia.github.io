import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './routes';
import { Colors, Fonts } from '../themes';
import Landing from '../components/Landing';
import Projects from '../components/Projects';


// https://hoang.moe/
// https://thibautfoussard.com/
export default function AppRouter({ }) {
  return (
    <Router>
      <Route render={({ location }) => (
        <React.Fragment>
          <Switch location={location}>
            <Route exact path={Routes.home} component={Landing} />
            <Route exact path={Routes.projects} component={Projects} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </React.Fragment>
      )}>
      </Route>
    </Router>
  )
}
