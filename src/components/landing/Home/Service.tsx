"use client";

import Heading from "@/components/ui/Heading";
import { Box, Card, Container, Grid, List, Text, Title } from "@mantine/core";

const data = [
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
  {
    label: "Web Development",
    contents: ["Front-End Development", "Back-End Development"],
    icon: "https://cdn.lordicon.com/tdrtiskw.json",
  },
];

const Service = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Service"
          text="Be part of our journey toward"
          gradientText="growth and excellence"
        />
        <Grid>
          {data.map((item, i) => (
            <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={i}>
              <Card
                shadow="md"
                className="rounded-xl !rounded-tr-sm !rounded-bl-sm group"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {/* <lord-icon
                  src={item?.icon}
                  trigger="loop"
                  colors="primary:#121212,secondary:#00ff00"
                  style={{ width: "80px", height: "80px" }}
                  className="group-hover:!pointer-events-auto"
                /> */}
                <Title order={4} fw={500}>
                  {item.label}
                </Title>
                <List listStyleType="inherit" withPadding>
                  {item.contents.map((lItem, lI) => (
                    <List.Item key={lI} c="dimmed">
                      <Text size="sm">{lItem}</Text>
                    </List.Item>
                  ))}
                </List>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
