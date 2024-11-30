import { BackgroundImage, Card, Center, Container } from "@mantine/core";
import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BackgroundImage
      h="100vh"
      src="https://placehold.co/1920x720?text=1920x720"
    >
      <Container size="xs" h="100%">
        <Center h="100%">
          <Card shadow="sm" p="md" w="100%">
            {children}
          </Card>
        </Center>
      </Container>
    </BackgroundImage>
  );
};

export default Wrapper;
