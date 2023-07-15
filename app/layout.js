"use client";
import { AppProvider } from "./components/context/context";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import Search from "./components/search";
import Sidemenu from "./components/submenu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Popcorn TV+",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <ScrollToTop />
          <Search/>
          <Sidemenu/>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
