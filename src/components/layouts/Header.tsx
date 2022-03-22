import React, { useContext } from "react";

import { Auth } from "aws-amplify";

import { UserContext } from "../../App";

const Header: React.FC = () => {
  const { setCurrentUser } = useContext(UserContext);

  // サインアウトボタンを設置
  const signout = () => {
    Auth.signOut().catch((err: any) => console.log(err));
    setCurrentUser(undefined);
  };

  return (
    <>
      <h1>
        <a href="index.html">SAMPLE</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="index.html#about">ABOUT</a>
          </li>
          <li>
            <a href="index.html#menu">MENU</a>
          </li>
          <li>
            <button onClick={signout}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
