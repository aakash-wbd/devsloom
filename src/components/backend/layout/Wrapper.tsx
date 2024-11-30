"use client";

import { AppShell } from "@mantine/core";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: true } }}
      p="xs"
    >
      <AppShell.Header>
        <AppBar />
      </AppShell.Header>
      <AppShell.Navbar>
        <SideBar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Wrapper;
