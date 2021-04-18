import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import ShopPage from "./Components/shoppage/ShopPage";
import signinsignup from "./Components/SignIn-SignUp/signin-signup";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./Firebase/Firebase";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("auth user is", authUser);
      // debugger
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            // photo: authUser.photoURL,
            // email: authUser.email,
            // displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signinsignup} />
      </Switch>
    </div>
  );
}

export default App;
