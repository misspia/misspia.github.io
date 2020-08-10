import ReactDOM from 'react-dom'
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Routes from './routes';
import { Colors, Fonts } from './themes';
import Landing from './components/Landing';
import Projects from './components/Projects';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${Fonts.family};
    background-color: ${Colors.white};
  }
  a {
    text-decoration: none;

    &:visited, &:focus {
      color: ${Colors.black};
      outline: none;
      text-decoration: none;
    }
  }
  .fade-appear {
    opacity: 0.01;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

// https://hoang.moe/
// https://thibautfoussard.com/
function App({ }) {
  return (
    <Router>
      <Route render={({ location }) => (
        <React.Fragment>
          <GlobalStyle />
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

ReactDOM.render(<App />, document.getElementById('root'));
