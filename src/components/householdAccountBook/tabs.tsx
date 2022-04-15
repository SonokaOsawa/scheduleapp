import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { EditIcon, CalendarIcon } from "@chakra-ui/icons";

import { InputForm } from "./InputForm";
import { HouseholdCalendar } from "./HouseholdCalendar";

export const tabs = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="purple" mt={4} mx={3}>
      <TabList>
        <Tab _focus={{ boxShadow: "none" }}>
          <EditIcon mr={1} />
          <Text>入力</Text>
        </Tab>
        <Tab _focus={{ boxShadow: "none" }}>
          <CalendarIcon mr={1} />
          <Text>カレンダー</Text>
        </Tab>
        <Tab _focus={{ boxShadow: "none" }}>
          <Text>支出</Text>
        </Tab>
        <Tab _focus={{ boxShadow: "none" }}>
          <Text>収入</Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InputForm />
        </TabPanel>
        <TabPanel>
          <HouseholdCalendar />
        </TabPanel>
        <TabPanel>
          <p>支出</p>
        </TabPanel>
        <TabPanel>
          <p>収入</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
