import Wrapper from "@/components/auth/Wrapper";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default layout;
