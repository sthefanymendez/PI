import { Route, Switch } from "react-router";

import Landing from "./components/Landing";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </>
    // <div>hola</div>
  );
};

export default App;
