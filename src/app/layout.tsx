import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Fira_Sans, Roboto } from "next/font/google";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400"],
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--fira-sans",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DevsLoom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    fontFamily: `${roboto.style.fontFamily}, sans-serif`,
    headings: {
      fontFamily: `${firaSans.style.fontFamily}, sans-serif`,
    },
    primaryColor: "primary",
    fontSmoothing: true,
    colors: {
      primary: [
        "#f8e9ff",
        "#e8cfff",
        "#cd9cff",
        "#b165ff",
        "#9937fd",
        "#8a1afd",
        "#8309fe",
        "#7000e3",
        "#6400cb",
        "#5600b3",
      ],
    },
  });
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}
        <script src="https://cdn.lordicon.com/libs/mssddfmo.js"></script>


        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
