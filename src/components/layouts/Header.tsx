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
      bg="purple.300"
      color="gray.50"
      align="center"
      justify="center"
      h={16}
    >
      <Box textAlign="center" mx={2}>
        <Link href="index.html">HOME</Link>
      </Box>
      <Spacer />
      <Box textAlign="center" mx={2}>
        <Link href="index.html#about">ABOUT</Link>
      </Box>
      <Box textAlign="center" mr={2}>
        <Button colorScheme="white" variant="outline" onClick={signout}>
          Sign Out
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
