"use client";
import Heading from "@/components/ui/Heading";
import { Box, Container, Grid } from "@mantine/core";
import Form from "./Form";
import Process from "./Process";

const Contact = () => {
  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Contact with US"
          text="Reach out to us for"
          gradientText="exceptional collaboration opportunities"
        />
        <Grid gutter={40} align="center" mt="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Form />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Process />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
