import HomePage from "pages/home";
import Detail from "components/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/country/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Routes;