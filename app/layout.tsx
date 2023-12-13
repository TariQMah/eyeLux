import { ThemeProvider } from "@/providers/theme-provider";

import { Raleway } from "next/font/google";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import type { Metadata } from "next";
import "./globals.css";
// import ModalProvider from '@/providers/modal-provider'
// import ToastProvider from '@/providers/toast-provider'

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ToastProvider />
        <ModalProvider /> */}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
