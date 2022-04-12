import React from "react";

import { useRadio, Box, useRadioGroup, Grid, GridItem } from "@chakra-ui/react";

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <GridItem
        textAlign="center"
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: props.children,
          color: "white",
        }}
        p={1}
      >
        {props.children}
      </GridItem>
    </Box>
  );
};

interface Props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioColor: React.VFC<Props> = ({ color, setColor }) => {
  const options = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: color,
    onChange: (nextValue: string) => setColor(nextValue),
  });

  const group = getRootProps();

  return (
    <Grid mt={1} templateColumns="repeat(3, 1fr)" {...group} gap={4}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Grid>
  );
};
