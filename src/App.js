import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ScreenUrls from "./utils/ScreenUrls";
import {Home, About, Menu} from "./scenes/";
import {MuiThemeProvider} from "material-ui"

import './App.css';

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <>
            <MuiThemeProvider>
                <BrowserRouter>
                    <div id="app">
                        <Switch>
                            <Route  path={ScreenUrls.HOME} component={Home}/>
                            <Route path={ScreenUrls.ABOUT} component={About}/>
                            <Route path={ScreenUrls.MENU} component={Menu}/>
                            <Redirect from={ScreenUrls.DEFAULT} to={ScreenUrls.HOME} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        </>
    );
}

export default App;
