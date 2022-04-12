import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Flex, Link, Box, Button, Spacer } from "@chakra-ui/react";

import { Auth } from "aws-amplify";

import { UserContext } from "../../App";

const Header: React.FC = () => {
  const { setCurrentUser } = useContext(UserContext);

  const signout = () => {
    Auth.signOut().catch((err: any) => console.log(err));
    setCurrentUser(undefined);
  };

  const history = useHistory();

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
        <Button
          colorScheme="white"
          variant="link"
          onClick={() => history.push("/")}
        >
          Calendar
        </Button>
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
