import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./Pages/Homepage/homepage.component";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";
import SignInAndSignUp from "./Pages/Sign-in and Sign-up/sign-in and sign-up.component";
import Contact from "./Pages/Contact/contact.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.data";

import { setCurrentUser } from "./Redux/User/user.action";

class App extends React.Component {
  
  unSubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if we having user...
      if (userAuth) {
        //here i am checking is the database has Updated or changes the snapshot of the user
        const userRef = await createUserProfileDocument(userAuth);
        //this will do when the App runs and this will return the Snapshot of current user
        userRef.onSnapshot((snapShot) => {
          //setting current user to its properties
          setCurrentUser({
            currentUser: {
              id: snapShot.id, //type
              ...snapShot.data(), //payload
            },
          });
        });
      }

      setCurrentUser(userAuth); //if there is no user ...then it will be null
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/contactUs" component={Contact} />
        </Switch>
      </div>
    );
  }
}
//to get the Data from store
const mapStateToProps = ({ user }) => ({
  setCurrentUser: user.currentUser,
});

//set data to store
const mapDispatchToProp = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
