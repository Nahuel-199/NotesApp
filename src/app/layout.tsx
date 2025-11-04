import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Tus notas",
  description: "Guarda y organiza tus frases favoritas en un solo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <Provider>
          <ReduxProvider>
            <Toaster />
            {children}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}