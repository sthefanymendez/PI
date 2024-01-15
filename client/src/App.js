import { Route, Switch } from "react-router";

import Landing from "./components/Landing";
import Home from "./components/home/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/:idPokemon' component={Detail} />
      </Switch>
    </>
    // <div>hola</div>
  );
};

export default App;
