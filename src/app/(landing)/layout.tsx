import Wrapper from "@/components/landing/layout/Wrapper";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default layout;
