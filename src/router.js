import React from 'react';
import {Route, Router, Switch} from 'dva/router';
import Products from './routes/Products';

function RouterConfig({history}) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Products}/>
        </Switch>
      </Router>
  );
}

export default RouterConfig;