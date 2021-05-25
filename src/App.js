import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import ShopPage from "./Components/shoppage/ShopPage";
import Signinsignup from "./Components/SignIn-SignUp/Signin-signup";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./Firebase/Firebase";
import { setCurrentUser } from "./Redux/user/user.action";

function App(props) {
  const { setCurrentUser } = props;
  //console.log(props);
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
          //debugger;
        });
      }
      setCurrentUser(authUser);
    });
  }, []);

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <Signinsignup />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
