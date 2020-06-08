import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import SearchFor from './pages/Search-for';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={SearchFor} path="/Search-for" />
        </BrowserRouter>
    );
}

export default Routes;