import React from "react";

import Header from "./Header";

type WrapperProps = {
  children: React.ReactElement;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <h1>{children}</h1>
      </main>
    </>
  );
};

export default Wrapper;
