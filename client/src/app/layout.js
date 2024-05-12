import ReactQueryProvider from "./Provider/Provider";
import Navbar from "../components/Navbar/Navbar";
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { use } from "react";
import useCategoriesStore from "@/store/catStores/getAllCatsStore";
import getAllCategories from "@/libs/quaries/categories/getAllCategories";
config.autoAddCss = false;
export const metadata = {
  title: "Pshop",
  description: "hello and welcome to Pshop ",
};

export default async function RootLayout({ children }) {

  const catData = await getAllCategories(); // fetchin category data for navbar

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Navbar catData={catData} />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
