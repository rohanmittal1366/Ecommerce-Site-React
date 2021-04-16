import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import ShopPage from "./Components/shoppage/ShopPage";
import signinsignup from "./Components/SignIn-SignUp/signin-signup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signinsignup} />
      </Switch>
    </div>
  );
}

export default App;
