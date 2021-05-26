import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "pages/home";
import Detail from "components/Detail";
import SignInPage from "pages/signin";
import SignUpPage from "pages/signup";
import FavoritesPage from "pages/favorites";

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/country/:id" component={Detail} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/favourites" component={FavoritesPage} />
      </Switch>
    </Router>
  );
}

export default Routes;