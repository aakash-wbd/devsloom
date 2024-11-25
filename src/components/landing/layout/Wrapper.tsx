"use client";

import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 60 });
  const [scrolled, setScrolled] = useState<boolean>(false);

  const scrollHandler = () => {
    window.scrollY >= 60 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <AppShell
      header={{
        // height: scrolled ? 60 : 140,
        height: 60,
        collapsed: !pinned,
        offset: false,
      }}
    >
      <AppShell.Header bg="transparent" withBorder={false}>
        <AppBar />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer pos="unset">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Wrapper;
