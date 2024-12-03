"use client";

import {
  Box,
  Center,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";

const Hero = () => {
  return (
    <Box w="100%" h="100vh" bg="#E0F5FE" pos="relative">
      <Center h="100%">
        <Container size="xl">
          <Grid align="center">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Box>
                <Text
                  ta="center"
                  fz={16}
                  fw={700}
                  c="primary"
                  className="uppercase"
                >
                  WANNA LEARN WHO WE ARE?
                </Text>
                <Title
                  order={2}
                  ta="center"
                  maw={{ base: "100%", md: "70%" }}
                  fz={{ base: 24, xs: 32, md: 48 }}
                  mx="auto"
                >
                  Know About Us and{" "}
                  <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
                    Relive Our Journey
                  </span>
                </Title>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Image
                maw={{ base: "100%", xs: 500 }}
                fit="contain"
                src="https://www.webdew.com/wp-content/uploads/2023/10/about-banner.png"
                alt="about"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Center>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Hero;
