"use client";
import Heading from "@/components/ui/Heading";
import { images } from "@/constants/images";
import { Carousel } from "@mantine/carousel";
import { Box, Container, Grid, Image } from "@mantine/core";

type ClientData = {
  name: string;
  url: string;
  image: string;
};

const data: ClientData[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand1.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand2.src,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    image: images.brand3.src,
  },
];

const formatData = (data: ClientData[]): ClientData[][] => {
  const payload: ClientData[][] = [];
  for (let i = 0; i < data.length; i += 12) {
    payload.push(data.slice(i, i + 12));
  }
  return payload;
};

const Client = () => {
  const formattedData = formatData(data);

  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Clients"
          text="Collaborating with the best"
          gradientText="clients for mutual success"
        />
        <Carousel withControls={formattedData.length > 1}>
          {formattedData.map((item, i) => (
            <Carousel.Slide key={i}>
              <Grid>
                {item.map((sItem, sI) => (
                  <Grid.Col key={sI} span={{ base: 6, sm: 4, md: 3 }}>
                    <Image
                      w="100%"
                      h={200}
                      src={sItem.image}
                      alt={sItem.name}
                      fit="contain"
                      className="!grayscale hover:!grayscale-0 transition duration-300 ease-in-out"
                      data-aos="fade-up"
                      data-aos-delay={(sI + 2) * 100}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Client;
