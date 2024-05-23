import Sidebar from "@/components/shared/sideBar/SideBar";
import { Flex } from "@chakra-ui/react";

export default async function RootLayout({ children }) {
  return (
    <Flex>
      <Sidebar />
      {children}
    </Flex>
  );
}
