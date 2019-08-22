import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sheet from '../screens/sheet';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route path='/' exact component={Sheet} />
    </Fragment>
  </Router>
);

export default AppRouter;
