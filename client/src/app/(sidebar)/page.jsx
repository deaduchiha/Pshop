import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/shared/sideBar/SideBar";
import Posts from "@/components/templates/posts/Posts";
export default async function HomePage() {
  return (
    <Flex dir="rtl">
      <SideBar />
      <Posts />
    </Flex>
  );
}
