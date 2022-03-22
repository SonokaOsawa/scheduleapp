import React, { useContext } from "react";

import { Flex, Link, Box, Button, Spacer } from "@chakra-ui/react";

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
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="center"
      h={16}
    >
      <Flex align="center" px={2} display="flex">
        <Link href="index.html">HOME</Link>
      </Flex>
      <Flex align="center" px={2} display="flex" justify="flex-end">
        <Link href="index.html#about">ABOUT</Link>
      </Flex>
      <Flex align="center" flexGrow={2} display="flex">
        <Button colorScheme="white" variant="outline" onClick={signout}>
          Sign Out
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
