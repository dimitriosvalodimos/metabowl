import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Switch>
  );
};

export default ColorModeSwitch;
