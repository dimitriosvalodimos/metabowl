import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { ReactChild } from "../utils/commonProps";

export function Chakra({
  cookies,
  children,
}: {
  cookies: string;
  children: ReactChild;
}) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider resetCSS colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: { req: any }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
