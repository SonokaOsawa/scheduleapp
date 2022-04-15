import React from "react";

import { useRadio, Box, useRadioGroup, HStack } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="xl"
        _checked={{
          bg: "purple.400",
          color: "white",
        }}
        p={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface Props {
  plusminus: string;
  setPlusminus: React.Dispatch<React.SetStateAction<string>>;
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const RadioInput: React.VFC<Props> = ({ plusminus, setPlusminus }) => {
  const options = ["支出", "収入"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "plusorminus",
    defaultValue: plusminus,
    onChange: (nextvalue: string) => setPlusminus(nextvalue),
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
