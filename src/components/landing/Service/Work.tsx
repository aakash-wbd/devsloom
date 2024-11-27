"use client";

import { Box, Container, Grid, Text } from "@mantine/core";

const Work = () => {
  return (
    <Box py={100} bg='#EBEBEB' mb='xl'>
      <Container size="xl">
        <Grid>
          <Grid.Col span={6}>
            <Text>
              Web & App Development <br /> Done Differently
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              totam hic veritatis perspiciatis! Assumenda vel, esse vero illo
              natus aspernatur accusamus veniam quaerat corporis. Fuga
              repellendus eius iusto praesentium voluptatum deleniti labore
              doloribus aperiam sequi cumque, minus accusamus quas nostrum eaque
              consectetur molestiae asperiores quia illum consequatur architecto
              iure quisquam? Similique error sit sequi nam vero fugiat aliquid,
              officiis molestiae! Ut eaque iure quis sapiente vero
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
