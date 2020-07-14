import React from "react";
import {Switch, Route} from "react-router"
import ScreenUrls from "./utils/ScreenUrls";
import {Home, About, Menu} from "./scenes"

const AppRouter = () => (
    <>
        <Switch>
            <Route path={ScreenUrls.HOME} component={Home} />
            <Route path={ScreenUrls.ABOUT} component={About} />
            <Route path={ScreenUrls.MENU} component={Menu} />
        </Switch>
    </>
);

export default AppRouter;