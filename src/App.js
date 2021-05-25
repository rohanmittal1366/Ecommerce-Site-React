import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import ShopPage from "./Components/shoppage/ShopPage";
import signinsignup from "./Components/SignIn-SignUp/signin-signup";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./Firebase/Firebase";
import { setCurrentUser } from "./Redux/user/user.action";

function App(props) {
  const { setCurrentUser } = props;

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      //console.log("auth user is", authUser);
      // debugger
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot.data());

          setCurrentUser({
            uid: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(authUser);
    });
  });

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

const mapDispatchToPops = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToPops)(App);
