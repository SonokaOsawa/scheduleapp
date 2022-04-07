import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

import Wrapper from "./components/layouts/Wrapper";
import Header from "./components/layouts/Header";
import { Calendar } from "./components/calendar/Calendar";
import { EditSchedule } from "./components/calendar/EditSchedule";

Amplify.configure(awsconfig);

type User = {
  id: string;
  username: string;
  attributes: {
    email: string;
    sub: string; // いわゆるUID的なもの（一意の識別子）
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
        {/* <Wrapper> */}
        {/* <Switch>
            <Route path="/conponents/calendar/Calendar" component={Calendar} />
            <Route
              path="/component/calendar/EditSchedule"
              component={EditSchedule}
            />
          </Switch> */}
        {/* <Calendar />
        </Wrapper> */}
        <Header />
        <Switch>
          <Route path="/Calendar" component={Calendar} />
          <Route path="/EditSchedule" component={EditSchedule} />
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
