import {
  HashRouter as BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import React, { useContext, createContext, useState } from "react";
import HomePage from "./../pages/HomePage";
import Donors from "./../pages/DonorsPage";
import About from "./../pages/AboutPage";
import Contact from "./../pages/ContactPage";
import Login from "./../pages/Login";
import ForgotPassword from "./../pages/ForgotPasswordPage";
import AvailableDonors from "./../pages/AvailableDonors";
import Register from "./../pages/Register";
import Otp from "./../pages/Otp";
import RequestList from "./../pages/RequestList";
import Profile from "./../pages/Profile"
import RequestPage from "./../pages/RequestPage";
import UpdateBloodRequest from "./../pages/UpdateBloodRequest";
import { useSelector, useDispatch } from "react-redux";
function Router() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/donors">
          <Donors />
        </Route>
        <Route exact path="/availableDonors">
          <AvailableDonors />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <AuthRoute exact path="/login" >
          <Login />
        </AuthRoute>
        <AuthRoute exact path="/forgotPassword">
          <ForgotPassword />
        </AuthRoute>
        <AuthRoute exact path="/otp" >
          <Otp />
        </AuthRoute>
        <AuthRoute exact path="/register" >
          <Register />
        </AuthRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/request">
          <RequestPage />
        </PrivateRoute>
        <PrivateRoute path="/requestList">
          <RequestList />
        </PrivateRoute>
        <PrivateRoute path="/updateBloodRequest">
          <UpdateBloodRequest />
        </PrivateRoute>
      </BrowserRouter>
    </ProvideAuth>
  );
}

function useAuth() {
  return useContext(authContext);
}

const authContext = createContext();

function ProvideAuth({ children }) {
  const userToken = useSelector(state => state.authReducer.userProfile);
  return (
    <authContext.Provider value={userToken}>
      {children}
    </authContext.Provider>
  );
}

function PrivateRoute({ children, ...rest }) {
  const userToken = useSelector(state => state.authReducer.userProfile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function AuthRoute({ children, ...rest }) {
  const userToken = useSelector(state => state.authReducer.userProfile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !userToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default Router
