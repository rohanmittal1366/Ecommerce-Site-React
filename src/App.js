import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import ShopPage from "./Components/shoppage/ShopPage";
import signinsignup from "./Components/SignIn-SignUp/signin-signup";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth, createUserProfileDocument } from "./Firebase/Firebase";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      //console.log("auth user is", authUser);
      // debugger
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          //console.log(snapShot.data());
          dispatch(
            login({
              uid: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
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
