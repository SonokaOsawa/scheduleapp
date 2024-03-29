import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

import Header from "./components/layouts/Header";
import { Calendar } from "./components/calendar/Calendar";
import { EditSchedule } from "./components/calendar/EditSchedule";
import { InputForm } from "./components/householdAccountBook/InputForm";
import { Category } from "./components/householdAccountBook/Category";
import { AddCategory } from "./components/householdAccountBook/AddCategory";
import { EditData } from "./components/householdAccountBook/EditData";
import { HouseholdCalendar } from "./components/householdAccountBook/HouseholdCalendar";
import { Expense } from "./components/householdAccountBook/Monthly/Expense";

Amplify.configure(awsconfig);

type User = {
  id: string;
  username: string;
  attributes: {
    email: string;
    sub: string; // UID的なもの（一意の識別子）
  };
};

export const UserContext = createContext(
  {} as {
    userInfo: User | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<object | undefined>>;
  }
);

const App: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [currentUser, setCurrentUser] = useState<object | undefined>();
  const [userInfo, setUserInfo] = useState<User>();

  const getUserInfo = async () => {
    const currentUserInfo = await Auth.currentUserInfo();
    setUserInfo(currentUserInfo);
  };

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setCurrentUser(authData);
    });
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return authState === AuthState.SignedIn && currentUser ? (
    <Router>
      <UserContext.Provider value={{ userInfo, setCurrentUser }}>
        <Header />
        <Switch>
          <Route exact path="/EditSchedule" component={EditSchedule} />
          <Route exact path="/InputAOM" component={InputForm} />
          <Route
            exact
            path="/HouseholdCalendar"
            component={HouseholdCalendar}
          />
          <Route exact path="/Expense" component={Expense} />
          <Route exact path="/Categories" component={Category} />
          <Route exact path="/Addcategory" component={AddCategory} />
          <Route exact path="/EditData" component={EditData} />
          <Route exact path="/" component={Calendar} />
        </Switch>
      </UserContext.Provider>
    </Router>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "email" },
          { type: "password" },
        ]}
      ></AmplifySignUp>
    </AmplifyAuthenticator>
  );
};

export default App;
