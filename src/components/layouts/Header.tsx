import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { ChevronDownIcon, EditIcon, CalendarIcon } from "@chakra-ui/icons";

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
    <Flex as="nav" bg="purple.300" color="gray.50" align="center" h={16}>
      <Box mx={5}>
        <Button
          mr={3}
          colorScheme="white"
          variant="link"
          onClick={() => history.push("/")}
          _focus={{ boxShadow: "none" }}
          textAlign="center"
        >
          スケジュール
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="white"
            _focus={{ boxShadow: "none" }}
            textAlign="center"
          >
            家計簿
          </MenuButton>
          <MenuList>
            <MenuItem
              color="black"
              icon={<EditIcon />}
              onClick={() => history.push("/InputAOM")}
            >
              入力
            </MenuItem>
            <MenuItem
              color="black"
              icon={<CalendarIcon />}
              onClick={() => history.push("/HouseholdCalendar")}
            >
              カレンダー
            </MenuItem>
            <MenuDivider />
            <MenuGroup title="グラフ" color="black">
              <MenuItem color="black" onClick={() => history.push("/Expense")}>
                月間支出
              </MenuItem>
              <MenuItem color="black">月間収入</MenuItem>
              <MenuItem color="black">年間支出</MenuItem>
              <MenuItem color="black">年間収入</MenuItem>
              <MenuItem color="black">貯金</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box textAlign="center" mr={4}>
        <Button colorScheme="white" variant="outline" onClick={signout}>
          Sign Out
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
