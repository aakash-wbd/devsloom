"use client";

import { Box, Center, Container, Grid, Image } from "@mantine/core";

const Hero = () => {
  return (
    <Box h={"100vh"} bg="#256DE9" pos="relative">
      <Center w="100%" h="100%" className="!z-20">
        <Container size="xl">
          <Grid h="100%" align="center">
            <Grid.Col span={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nihil harum laborum ducimus, commodi totam cumque atque asperiores
              error animi repellat dignissimos incidunt quibusdam? Rerum
              quisquam placeat consequatur est itaque culpa quidem dignissimos
              ex libero? Eum numquam quibusdam, ex sapiente tempora inventore et
              mollitia quisquam quos aliquid quasi sit veritatis nostrum illo
              porro atque? Fugit fuga aspernatur, mollitia inventore quibusdam
              esse facere iusto obcaecati a architecto? Atque ullam harum
              sapiente, quia recusandae minus excepturi libero eaque fugiat eum,
              sequi facere distinctio quam hic cum laboriosam facilis! Tempora
              dolorem porro esse, reiciendis maiores suscipit, ea voluptatem eos
              a totam iusto, aut voluptatibus sunt nam quam quasi? Sapiente
              nostrum in, enim architecto accusantium nihil, aliquam vitae
              tenetur quisquam consequatur rem esse dolorum quis ut autem odio
              suscipit doloribus. Rerum suscipit maxime cumque dolores mollitia.
              Aspernatur quam similique iste optio necessitatibus consectetur,
              est eligendi, sed dolorum, tenetur nesciunt tempore voluptatibus
              quas totam. Tempore, quos quod accusantium error, cupiditate
              libero consequatur autem molestias eligendi unde tenetur magnam ut
              obcaecati neque maiores repellendus? Id adipisci rem nostrum
              pariatur facilis laborum, incidunt dolore facere omnis quam
              praesentium similique, voluptates dicta odit, perferendis vel
              dolor explicabo nesciunt? Ut facilis id rerum cum perferendis eius
              odio eaque odit?
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                w="100%"
                h={500}
                src="https://live.templately.com/wp-content/uploads/2020/08/7e0e3e50-illustator.png"
                alt="logo"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Center>

      <div className="absolute w-full left-0 bottom-0 transform rotate-180 overflow-hidden -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="relative block !left-1/2 !w-[calc(100%+1.3px)] !h-[750px] !transform !-translate-x-1/2 !rotate-y-180"
          style={{
            transform: "rotateY(180deg)",
            transformOrigin: "center",
          }}
        >
          <path
            style={{
              transformOrigin: "center",
              transform: "rotateY(180deg)",
            }}
            d="M0,6V0h1000v100L0,6z"
            fill=""
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default Hero;
