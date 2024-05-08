import ReactQueryProvider from "./Provider/Provider";
import Navbar from "./utils/Navbar.jsx/Navbar";
import "./global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export const metadata = {
  title: "Pshop",
  description: "hello and welcome to Pshop ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
