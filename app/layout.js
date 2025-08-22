// app/layout.js
import Navbar from "./components/Navbar";
import SessionWrapper from "./components/SessionWrapper";
import "./globals.css";
import Providers from "./providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
