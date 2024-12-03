"use client";

import { Carousel } from "@mantine/carousel";
import { Box, Container, Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Technology = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box py="xl">
      <Container size="xl">
        <Carousel
          slideSize="12.5%"
          slideGap="md"
          loop
          align="center"
          slidesToScroll={8}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withControls={false}
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
                  data-aos="fade-down"
                  data-aos-delay={100}
                />
              </Carousel.Slide>
            ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Technology;
