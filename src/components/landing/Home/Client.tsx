"use client";
import Heading from "@/components/ui/Heading";
import { clients } from "@/constants/clients";
import { Carousel } from "@mantine/carousel";
import { Anchor, Box, Container, Flex, Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type ClientData = {
  name: string;
  url: string;
  image: string;
};

const formatData = (data: ClientData[]): ClientData[][] => {
  const payload: ClientData[][] = [];
  for (let i = 0; i < data.length; i += 12) {
    payload.push(data.slice(i, i + 12));
  }
  return payload;
};

const Client = () => {
  const formattedData = formatData(clients);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Clients"
          text="Collaborating with the best"
          gradientText="clients for mutual success"
        />
        <Carousel
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {formattedData.map((item, i) => (
            <Carousel.Slide key={i}>
              <Flex wrap="wrap" align="center" gap="md">
                {item.map((sItem, sI) => (
                  <Anchor
                    style={{
                      flex: "0 1 calc(25% - 16px)",
                      maxWidth: "calc(25% - 16px)",
                    }}
                    p="md"
                    href={sItem?.url}
                    className="!block"
                    target="_blank"
                  >
                    <Image
                      w="100%"
                      h={150}
                      src={sItem.image}
                      alt={sItem.name}
                      fit="contain"
                      className="!grayscale hover:!grayscale-0 transition duration-300 ease-in-out"
                      data-aos="fade-up"
                      data-aos-delay={(sI + 2) * 100}
                    />
                  </Anchor>
                ))}
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Client;
