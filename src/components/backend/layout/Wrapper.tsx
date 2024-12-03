"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 200, breakpoint: "sm", collapsed: { mobile: !opened } }}
      p="xs"
      layout="alt"
    >
      <AppShell.Header>
        <AppBar onOpen={open}/>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <SideBar onClose={close} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Wrapper;
