import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Provider from "@/Lib/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Track Your Connections",
  description: "KeenKeeper helps you manage and track your interactions with friends. Monitor calls, texts, and video chats to maintain stronger relationships.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning
    >
      <body className="min-h-full flex  flex-col">
        <Provider>
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
          <Footer />

          <ToastContainer position="top-left" />
        </Provider>

      </body>

    </html>
  );
}
