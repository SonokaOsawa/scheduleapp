import React from "react";

import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "email" },
          { type: "password" },
        ]}
      ></AmplifySignUp>
      <h1>You have successfully signed in</h1>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
};

export default App;
