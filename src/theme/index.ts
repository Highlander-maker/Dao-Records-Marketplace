import {
  createLocalStorageManager,
  extendTheme,
  ThemeConfig,
  theme as baseTheme,
} from "@chakra-ui/react";

import Accordion from "./accordion";
import Button from "./button";
import Heading from "./heading";
import Input from "./input";
import Menu from "./menu";
import Modal from "./modal";
import Popover from "./popover";
import Spinner from "./spinner";
import Tabs from "./tabs";
import Tooltip from "./tooltip";

import shadows from "./shadows";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const ThemeStorageManager = createLocalStorageManager("andromeda-marketplace-theme");

export default extendTheme({
  config,
  styles: {
    global: {
      "*": {
        scrollbarWidth: "6px",
        scrollbarColor: "#7F56D9 transparent",
      },
      "*::-webkit-scrollbar": {
        width: "6px",
      },
      "*::-webkit-scrollbar-track": {
        bg: "#1a202c",  // Ensure this aligns with your dark theme
      },
      "*::-webkit-scrollbar-thumb": {
        bg: "#7F56D9",
        borderRadius: "1.5rem",
      },
      body: {
        bg: "#1a202c",  // Dark background color for the body
        color: "white", // White text color for the body
      },
    },
  },
  shadows,
  fonts: {
    heading:
      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    body: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    mono: "Menlo, monospace",
  },
  components: {
    Accordion,
    Button,
    Heading,
    Input,
    Menu,
    Modal,
    Popover,
    Spinner,
    Tabs,
    Tooltip,
    Text: {
      baseStyle: {
        color: "white",  // Default text color for Text component
      },
    },
  },
  colors: {
    primary: {
      25: "#FCFAFF",
      50: "#F9F5FF",
      100: "#F4EBFF",
      200: "#E9D7FE",
      300: "#D6BBFB",
      400: "#B692F6",
      500: "#9E77ED",
      600: "#7F56D9",
      700: "#6941C6",
      800: "#53389E",
      900: "#42307D",
    },
    gray: {
      25: "#1A1818",
      50: "#F9FAFB",
      100: "#F2F4F7",
      200: "#EAECF0",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1A1818",  // Ensure this is a dark gray for your theme
      900: "#101828",  // This can be used for darker elements like text
    },
    system: baseTheme.colors.gray,
  },
  textStyles: {
    h1: {
      fontWeight: 700,
      color: "white",  // Adjust h1 color for dark mode
      fontSize: "xl",
      mb: 2,
      letterSpacing: 0.5,
    },
    bold: {
      color: "white",  // Adjust bold text color for dark mode
      fontWeight: 700,
    },
    light: {
      color: "gray.400",  // Adjust light text color for dark mode
      fontSize: "sm",
    },
  },
});
