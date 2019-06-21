import React from 'react';
import {Route, Router, Switch} from 'dva/router';
import Admin from './routes/Admin';

function RouterConfig({history}) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Admin}/>
        </Switch>
      </Router>
  );
}

export default RouterConfig;
