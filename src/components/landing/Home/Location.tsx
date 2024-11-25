"use client";
import Heading from "@/components/ui/Heading";
import { images } from "@/constants/images";
import { Box, Card, Center, Container, Grid, Image, Text } from "@mantine/core";

const Location = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Office"
          text="Our office is open for visits."
          gradientText="Come by and see us!"
        />

        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Grid>
              <Grid.Col span={{ base: 12, lg: 6 }} visibleFrom="lg">
                <Box h={250} pos="relative" data-aos="fade-down">
                  <Image
                    w={350}
                    h={350}
                    bottom={-16}
                    fit="contain"
                    pos="absolute"
                    src={images.laptop.src}
                    alt="image"
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Card bg="#BFD5DB" radius="lg" h={250} data-aos="fade-down">
                  <Center w="100%" h="100%">
                    <Box>
                      <Text c="#17313b" className="!text-8xl !font-bold">
                        17
                      </Text>
                      <Text c="#17313b" className="!text-4xl !font-bold">
                        Years
                      </Text>
                      <Text c="#17313b" className="!text-xl">
                        Innovative in Development
                      </Text>
                    </Box>
                  </Center>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Card bg="#ACCDF4" radius="lg" h={250} data-aos="fade-down">
                  <Center w="100%" h="100%">
                    <Box>
                      <Text c="#17313b" className="!text-8xl !font-bold">
                        17
                      </Text>
                      <Text c="#17313b" className="!text-4xl !font-bold">
                        Years
                      </Text>
                      <Text c="#17313b" className="!text-xl">
                        Innovative in Development
                      </Text>
                    </Box>
                  </Center>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Card bg="#C8E38D" radius="lg" h={250} data-aos="fade-down">
                  <Center w="100%" h="100%">
                    <Box>
                      <Text c="#17313b" className="!text-8xl !font-bold">
                        17
                      </Text>
                      <Text c="#17313b" className="!text-4xl !font-bold">
                        Years
                      </Text>
                      <Text c="#17313b" className="!text-xl">
                        Innovative in Development
                      </Text>
                    </Box>
                  </Center>
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Image w="100%" h={500} src={images.map.src} data-aos="fade-down" alt="image" />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
