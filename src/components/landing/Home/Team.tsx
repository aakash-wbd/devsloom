"use client";

import Heading from "@/components/ui/Heading";
import { images } from "@/constants/images";
import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";

type TeamMember = {
  name: string;
  designation: string;
  avatar: string;
};

const Team = () => {
  const data = [
    { name: "Adams", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Baker", designation: "CO-Founder", avatar: images.team2.src },
    { name: "Clark", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Davis", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Evans", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Frank", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Ghosh", designation: "CO-Founder", avatar: images.team1.src },

    { name: "Adams", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Baker", designation: "CO-Founder", avatar: images.team2.src },
    { name: "Clark", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Davis", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Evans", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Frank", designation: "CO-Founder", avatar: images.team1.src },
    { name: "Ghosh", designation: "CO-Founder", avatar: images.team1.src },
  ];

  const formatData = (data: TeamMember[]) => {
    const payload: TeamMember[][] = [];
    for (let i = 0; i < data.length; i += 8) {
      payload.push(data.slice(i, i + 8));
    }
    return payload;
  };

  return (
    <Box mih="100vh" py={100}>
      <Container size="xl" my="xl">
        <Heading
          label="Our Team"
          text="Committed team delivering"
          gradientText="excellence with passion and expertise"
        />

        <Stack>
          {formatData(data)?.map((team, t) => (
            <Flex
              direction={{ base: "column", sm: "row" }}
              align="center"
              justify="center"
              key={t}
            >
              {team?.map((item, i) => (
                <Box
                  key={i}
                  w={{ base: "100%", sm: "auto" }}
                  data-aos="fade-up"
                  data-aos-delay={(i + 2) * 100}
                >
                  <Box
                    w={{ base: "100%", sm: 150 }}
                    h={{ base: 500, sm: i % 2 === 0 ? 520 : 500 }}
                    mx={{ base: 0, sm: 5 }}
                    my={{ base: 5, sm: 0 }}
                    pos="relative"
                    className={`hover:lg:w-[300px] bg-cover bg-center rounded-md overflow-hidden cursor-pointer group transition-[width,filter] duration-500 lg:grayscale hover:lg:grayscale-0`}
                    style={{ backgroundImage: `url(${item?.avatar})` }}
                  >
                    <Box
                      w="100%"
                      ta="center"
                      bg="rgba(0,0,0,0.3)"
                      p="md"
                      pos="absolute"
                      className="bottom-0 lg:bottom-[-100%] lg:opacity-0 group-hover:lg:bottom-0 group-hover:lg:opacity-100 transition-all duration-500"
                    >
                      <Title order={3} fw={500} c="white">
                        {item?.name}
                      </Title>
                      <Text size="sm" fw={500} c="dimmed">
                        {item?.designation}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Team;
