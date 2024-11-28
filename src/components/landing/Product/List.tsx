"use client";

import Heading from "@/components/ui/Heading";
import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

const List = () => {
  const [categories] = useState(["all", "marketing", "development", "app"]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data] = useState([
    {
      title: "Content Writing",
      category: "marketing",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/1.jpg",
    },
    {
      title: "Logo Sketching",
      category: "marketing",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/2.jpg",
    },
    {
      title: "UI/UX",
      category: "development",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/3.jpg",
    },
    {
      title: "Web Design",
      category: "development",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/4.jpg",
    },
    {
      title: "Android App",
      category: "app",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/5.jpg",
    },
    {
      title: "IOS App",
      category: "app",
      image: "https://thecodude.com/demo/tf/moyna/images/portfolio/6.jpg",
    },
  ]);

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);
  return (
    <Box py={100}>
      <Container size="xl">
        <Heading
          label="Our Creative Portfolio"
          text="Crafting exceptional designs for"
          gradientText="impactful client success"
        />

        <Group justify="center" mb="xl">
          {categories.map((item, i) => (
            <Button
              key={i}
              size="sm"
              variant={selectedCategory === item ? "filled" : "outline"}
              onClick={() => setSelectedCategory(item)}
              className="!capitalize"
            >
              {item}
            </Button>
          ))}
        </Group>

        <Grid>
          {filteredData.map((item, i) => (
            <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={i}>
              <Anchor component={Link} href="/product">
                <Box
                  data-aos="fade-up"
                  w="100%"
                  h={300}
                  className="relative group rounded-md overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <Image src={item.image} alt={item.title} w="100%" h="100%" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm opacity-0 transform scale-95 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                    <Title
                      c="white"
                      size="xl"
                      order={1}
                      fw={500}
                      className="transform translate-y-5 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {item.title}
                    </Title>
                    <Text
                      size="xl"
                      c="dimmed"
                      fw={500}
                      className="transform translate-y-5 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {item.category}
                    </Text>
                    {/* <ActionIcon variant="light">
                    <Icon icon="flowbite:eye-outline" color="white" />
                  </ActionIcon> */}
                  </div>
                </Box>
              </Anchor>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default List;
