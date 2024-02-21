import { Route, Switch } from "react-router";

import Landing from "./components/Landing";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/:idPokemon' component={Detail} />
        <Route exact path='/add' component={Add} />
      </Switch>
    </>
  );
};

export default App;
