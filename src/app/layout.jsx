import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthenticationProvider } from "./contexts/Authentication";
import { toast, Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerMate AI",
  description: "Your AI Career Practice Partner",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AuthenticationProvider>
        <Toaster position="top-right" />
        {children}
      </AuthenticationProvider>
    </body>
  </html>
);

export default RootLayout;
