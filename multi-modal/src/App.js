import Email from "./Form/Email";
import { Route, Switch, Redirect } from "react-router-dom";
import classes from "./Form/Email.module.css";
import FirstName from "./Form/FirstName";
import LastName from "./Form/LastName";
import Gender from "./Form/Gender";
import ProgressBar from "./Form/ProgressBar";

function App() {
  return (
    <div>
      <main className={classes.form}>
        <ProgressBar />
        <br /> <br />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/email" />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/firstName">
            <FirstName />
          </Route>
          <Route path="/lastname">
            <LastName />
          </Route>
          <Route path="/gender">
            <Gender />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
