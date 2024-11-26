"use client";

import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import React, { useEffect } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 });

  useEffect(() => {
    AOS.init({
      offset: 20,
    });
    AOS.refresh();

    if (typeof window !== "undefined") {
      defineElement(lottie.loadAnimation);
    }
  }, []);

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }}>
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
