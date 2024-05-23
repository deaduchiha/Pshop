import getAllCategories from "@/api/Allcategories";
import Navbar from "@/components/shared/navBar/Navbar";

export const metadata = {
  title: "CreatePost",
  description: "hello and welcome to createPost Page",
};

export default async function createPostLayout({ children }) {
  return <>{children}</>;
}
