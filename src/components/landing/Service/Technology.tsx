"use client";

import { Carousel } from "@mantine/carousel";
import { Box, Container, Image } from "@mantine/core";

const Technology = () => {
  return (
    <Box py={60}>
      <Container size="xl">
        <Carousel
          slideSize="12.5%"
          slideGap="md"
          loop
          align="center"
          slidesToScroll={8}
        >
          {Array(20)
            .fill(1)
            .map((_, i) => (
              <Carousel.Slide key={i}>
                <Image
                  w="100%"
                  h={80}
                  src="https://placehold.co/600x400?text=Placeholder"
                  alt="technology_logo"
                />
              </Carousel.Slide>
            ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Technology;
