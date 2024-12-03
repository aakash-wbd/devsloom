"use client";

import { AppShell } from "@mantine/core";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: "sm", collapsed: { mobile: true } }}
      p="xs"
      layout="alt"
    >
      <AppShell.Header>
        <AppBar />
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <SideBar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Wrapper;
