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
    <Box
      h="100vh"
      pos="relative"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "0px 0px",
        backgroundImage: `
          radial-gradient(18% 28% at 24% 50%, #D0F0FF 7%, #FFFFFF00 100%), 
          radial-gradient(18% 28% at 18% 71%, #F0F8FF 6%, #FFFFFF00 100%), 
          radial-gradient(70% 53% at 36% 76%, #E0FFFF 0%, #FFFFFF00 100%), 
          radial-gradient(42% 53% at 15% 94%, #F5F5F5 7%, #FFFFFF00 100%), 
          radial-gradient(42% 53% at 34% 72%, #F7F7F7 7%, #FFFFFF00 100%), 
          radial-gradient(18% 28% at 35% 87%, #FAFAFA 7%, #FFFFFF00 100%), 
          radial-gradient(31% 43% at 7% 98%, #F0F0F0 24%, #FFFFFF00 100%), 
          radial-gradient(21% 37% at 72% 23%, #D6F1D7 24%, #FFFFFF00 100%), 
          radial-gradient(35% 56% at 91% 74%, #D9E7FF 9%, #FFFFFF00 100%), 
          radial-gradient(74% 86% at 67% 38%, #B6F4E4 24%, #FFFFFF00 100%), 
          linear-gradient(125deg, #C3F0FF 1%, #A3B2FF 100%)
          `,
      }}
    >
      <Container size="xl" h="100%">
        <Center h="100%">
          <Grid align="center">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Text fz={16} fw={700} c="primary" className="uppercase">
                Join Us
              </Text>
              <Title order={2} fz={{ base: 24, xs: 32, md: 48 }}>
                Step into innovation, inspire change,{" "}
                <span className="bg-gradient-to-r from-[#FF8811] via-[#ED27FF] to-[#7F50FB] bg-clip-text text-transparent">
                  and achieve greatness
                </span>
              </Title>
              <Text size="md" c="dimmed" my="md">
                We blend cutting-edge technologies, technical expertise, and
                industry insights to craft innovative solutions that drive your
                business growth to new heights.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }} visibleFrom="md">
              <Image
                w={500}
                h={500}
                src="https://live.templately.com/wp-content/uploads/2020/08/7e0e3e50-illustator.png"
                alt="logo"
                ml="auto"
                className="object-fill"
              />
            </Grid.Col>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
};

export default Hero;
